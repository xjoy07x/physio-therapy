import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const API_KEY = process.env.NOOKAL_API_KEY?.trim();
  const BASE = process.env.NOOKAL_BASE_URL?.replace(/\/$/, "").trim();

  // 1. Validate Configuration
  if (!BASE || !API_KEY) {
    return NextResponse.json({ error: "Server configuration missing" }, { status: 500 });
  }

  // 2. Get Location ID from query or env
  const locationID = searchParams.get("locationId") || process.env.NOOKAL_CLINIC_ID;

  if (!locationID || locationID === "0") {
    return NextResponse.json({ error: "A valid Location ID is required" }, { status: 400 });
  }

  try {
    // Nookal v2 standard parameters
    const queryParams = new URLSearchParams({
      api_key: API_KEY,
      locationID: String(locationID), 
    });

    let url = `${BASE}/getPractitioners?${queryParams.toString()}`;
    console.log("📡 Fetching Practitioners:", url);

    let res = await fetch(url, { cache: "no-store" });

    // Fallback: If getPractitioners 404s, try getStaff (common in some v2 builds)
    if (res.status === 404) {
      console.warn("⚠️ getPractitioners not found, trying getStaff...");
      url = `${BASE}/getStaff?${queryParams.toString()}`;
      res = await fetch(url, { cache: "no-store" });
    }

    const json = await res.json();

    if (json.status === "success") {
      // v2 usually nests under data.results or just data
      const dataLayer = json.data?.results || json.data || {};
      
      // Look for staff, practitioners, or practitionersList
      const staffList = dataLayer.staff || dataLayer.practitioners || dataLayer.practitioner || [];

      if (Array.isArray(staffList)) {
        const normalized = staffList.map((p) => ({
          id: String(p.ID || p.staffID || p.id || ""),
          name: (p.Name || `${p.FirstName || ""} ${p.LastName || ""}`).trim() || "Unknown Practitioner"
        })).filter(p => p.id !== ""); // Remove empty entries
        
        return NextResponse.json(normalized);
      }
    }

    console.error("❌ Nookal Practitioner Error:", json);
    return NextResponse.json({ 
      error: json.message || "Could not retrieve staff list",
      details: json.data?.results ? Object.keys(json.data.results) : "No data keys"
    }, { status: 400 });

  } catch (err) { 
    console.error("💥 Practitioner Route Crash:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 }); 
  }
}