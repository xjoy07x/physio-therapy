import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, locationId, subject, message } = body;

    const API_KEY = process.env.NOOKAL_API_KEY;
    const FINAL_URL = "https://auzone1.nookal.com/v2/setInquiry"; 

    const nookalPayload = {
      api_key: API_KEY,
      data: {
        firstName,
        lastName,
        email,
        locationID: parseInt(locationId),
        subject,
        message,
      }
    };

    const response = await fetch(FINAL_URL, {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json",
        // This specific set of headers makes the request look like a human in a browser
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
        "Referer": "https://auzone1.nookal.com/",
        "Origin": "https://auzone1.nookal.com"
      },
      body: JSON.stringify(nookalPayload),
    });

    const contentType = response.headers.get("content-type");
    
    // If we get HTML, the firewall still blocked it
    if (!contentType || !contentType.includes("application/json")) {
      const errorHtml = await response.text();
      console.error("Firewall still active. HTML Preview:", errorHtml.substring(0, 100));
      return NextResponse.json({ 
        error: "Nookal Security Block", 
        details: "Firewall rejected the request. Check your API Key permissions in Nookal." 
      }, { status: 500 });
    }

    const data = await response.json();

    if (data.status === "success" || data.status === true) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: data.message || "API Error" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Connect Failed", details: error.message }, { status: 500 });
  }
}