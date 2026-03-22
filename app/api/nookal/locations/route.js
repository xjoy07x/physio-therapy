// import { NextResponse } from "next/server";

// export async function GET() {
//   const BASE = process.env.NOOKAL_BASE_URL?.replace(/\/$/, "");
//   const API_KEY = process.env.NOOKAL_API_KEY;
//   const url = `${BASE}/getLocations?api_key=${API_KEY}`;

//   try {
//     const res = await fetch(url, { cache: "no-store" });

//     // 1. Check if the response is actually HTML/Text instead of JSON
//     const contentType = res.headers.get("content-type");
//     if (!contentType || !contentType.includes("application/json")) {
//       const errorText = await res.text();
//       console.error("─── NOOKAL ERROR ───");
//       console.error("Status:", res.status);
//       console.error("Received HTML instead of JSON. Preview:", errorText.slice(0, 200));
//       return NextResponse.json({ error: "External API returned HTML" }, { status: 502 });
//     }

//     const json = await res.json();

//     // 2. Original Logic
//     if (json.status === "success" && json.data?.results) {
//       const locationsArray = json.data.results.locations || json.data.results;
//       const normalized = locationsArray.map((loc) => ({
//         id: String(loc.ID || loc.id),
//         name: loc.Name || loc.name || "Unnamed Location",
//         city: loc.City || ""
//       }));

//       return NextResponse.json(normalized);
//     }

//     return NextResponse.json(
//       { error: json.message || "Could not fetch locations" }, 
//       { status: 400 }
//     );
//   } catch (err) {
//     console.error("Fetch failed:", err);
//     return NextResponse.json({ error: "Connection failed" }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";

export async function GET() {
  const BASE = process.env.NOOKAL_BASE_URL?.replace(/\/$/, "");
  const API_KEY = process.env.NOOKAL_API_KEY;

  if (!BASE || !API_KEY) {
    return NextResponse.json({ error: "Missing config" }, { status: 500 });
  }

  try {
    const res = await fetch(`${BASE}/getLocations?api_key=${API_KEY}`, {
      cache: "no-store",
    });

    const json = await res.json();

    if (json.status === "success" && json.data?.results) {
      const locations = json.data.results.locations || json.data.results;

      return NextResponse.json(
        locations.map((l) => ({
          id: String(l.ID || l.id),
          name: l.Name || l.name || "Unnamed Location",
          city: l.City || "",
        }))
      );
    }

    return NextResponse.json({ error: "Failed to fetch locations" }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ error: "Connection failed" }, { status: 500 });
  }
}