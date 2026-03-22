import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { locationId, practitionerId, appointmentTypeId, date } = body;

    const API_KEY = "5Aa24F61-eA67-f1ed-7C0a-0e138DbE4926";
    const baseUrl = "https://api.nookal.com/production/v2/getAvailability";
    
    // Nookal v2 expects these exact keys
    const queryParams = new URLSearchParams({
      api_key: API_KEY,
      locationID: locationId,
      staffID: practitionerId, 
      appointmentTypeID: appointmentTypeId,
      dateStart: `${date}`,
      dateEnd: `${date}` 
    });

    const fullUrl = `${baseUrl}?${queryParams.toString()}`;
    console.log("DEBUG SEARCH URL:", fullUrl); // Check this in your terminal!

    const response = await fetch(fullUrl, {
      method: 'GET',
      headers: { 'Accept': 'application/json' }
    });
    
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const textError = await response.text();
      console.error("Debug Route Error:", textError);
      return NextResponse.json({ error: "Nookal returned HTML instead of JSON" }, { status: 502 });
    }

    const data = await response.json();

    if (data.status === "success" && data.data && data.data.results) {
      // Nookal v2 nests slots inside data.results.availability
      const slots = data.data.results.availability || [];
      return NextResponse.json(slots);
    } else {
      return NextResponse.json({ 
        error: data.details || "No availability found for this selection." 
      }, { status: 400 });
    }

  } catch (error) {
    console.error("Fetch Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}