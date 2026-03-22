// // import { NextResponse } from "next/server";

// // export async function GET() {
// //   const BASE = process.env.NOOKAL_BASE_URL.replace(/\/$/, "");
// //   const API_KEY = process.env.NOOKAL_API_KEY;
// //   const url = `${BASE}/getAppointmentTypes?api_key=${API_KEY}&locationID=1`;

// //   try {
// //     const res = await fetch(url, { cache: "no-store" });
// //     const json = await res.json();

// //     // 🕵️‍♂️ DIAGNOSTIC LOG - Look at your Terminal/Console for this!
// //     console.log("--- NOOKAL RAW RESPONSE START ---");
// //     console.log(JSON.stringify(json, null, 2));
// //     console.log("--- NOOKAL RAW RESPONSE END ---");

// //     if (json.status === "success" && json.data) {
// //       const data = json.data;
      
// //       const normalized = Object.keys(data).map((key) => {
// //         const item = data[key];
        
// //         // We are going to try every possible field Nookal might use
// //         const name = 
// //           item.appointmentTypeName || // Standard
// //           item.name ||                // Alternative
// //           item.Name ||                // Uppercase
// //           item.typeTitle ||           // Deep alternative
// //           item.title ||               // Short
// //           `Service ${key}`;           // Fallback

// //         return {
// //           id: String(key),
// //           name: name
// //         };
// //       });

// //       return NextResponse.json(normalized);
// //     }

// //     return NextResponse.json({ error: "Nookal returned success but no data" }, { status: 400 });
// //   } catch (err) {
// //     console.error("FETCH ERROR:", err);
// //     return NextResponse.json({ error: "Fetch failed", details: err.message }, { status: 500 });
// //   }
// // }

// import { NextResponse } from "next/server";

// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
  
//   /**
//    * Dynamic Location Handling:
//    * It checks the URL query first, then falls back to your .env variable.
//    */
//   const locationID = searchParams.get("locationId") || process.env.NOOKAL_CLINIC_ID;

//   if (!locationID || locationID === "0") {
//     return NextResponse.json({ error: "Location ID is required" }, { status: 400 });
//   }

//   const BASE = process.env.NOOKAL_BASE_URL.replace(/\/$/, "");
//   const API_KEY = process.env.NOOKAL_API_KEY;

//   // Use the dynamic locationID to fetch specific services for that clinic
//   const url = `${BASE}/getAppointmentTypes?api_key=${API_KEY}&locationID=${locationID}`;

//   try {
//     const res = await fetch(url, { cache: "no-store" });
//     const json = await res.json();

//     // Log this if you need to verify the structure for a specific location
//     // console.log("Nookal Services Response:", JSON.stringify(json, null, 2));

//     if (json.status === "success" && json.data?.results?.services) {
//       const servicesArray = json.data.results.services;

//       const normalized = servicesArray.map((service) => ({
//         // Ensure ID is a string for consistent frontend handling
//         id: String(service.ID), 
//         // Use Description (standard for Nookal v2) with a fallback to Name
//         name: service.Description || service.Name || "Unnamed Service",
//       }));

//       return NextResponse.json(normalized);
//     }

//     return NextResponse.json(
//       { error: json.message || "Data structure mismatch or no services found" }, 
//       { status: 400 }
//     );
//   } catch (err) {
//     console.error("Fetch failed for Appointment Types:", err);
//     return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const locationID =
    searchParams.get("locationId") || process.env.NOOKAL_CLINIC_ID;

  const BASE = process.env.NOOKAL_BASE_URL?.replace(/\/$/, "");
  const API_KEY = process.env.NOOKAL_API_KEY;

  if (!locationID) {
    return NextResponse.json({ error: "Location ID required" }, { status: 400 });
  }

  try {
    const res = await fetch(
      `${BASE}/getAppointmentTypes?api_key=${API_KEY}&locationID=${locationID}`,
      { cache: "no-store" }
    );

    const json = await res.json();

    if (json.status === "success" && json.data?.results?.services) {
      return NextResponse.json(
        json.data.results.services.map((s) => ({
          id: String(s.ID),
          name: s.Description || s.Name || "Unnamed Service",
        }))
      );
    }

    return NextResponse.json({ error: "No services found" }, { status: 400 });
  } catch (err) {
    return NextResponse.json({ error: "Fetch failed" }, { status: 500 });
  }
}