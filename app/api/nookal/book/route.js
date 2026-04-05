import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const BASE = process.env.NOOKAL_BASE_URL?.replace(/\/$/, "");
  const API_KEY = process.env.NOOKAL_API_KEY;

  if (!BASE) {
    return NextResponse.json({ error: "Missing NOOKAL_BASE_URL env var" }, { status: 500 });
  }
  if (!API_KEY) {
    return NextResponse.json({ error: "Missing NOOKAL_API_KEY env var" }, { status: 500 });
  }

  const locationID = body.locationID || process.env.NOOKAL_CLINIC_ID;
  if (!locationID || locationID === "0") {
    return NextResponse.json({ error: "Missing location ID" }, { status: 400 });
  }

  // Nookal "setAppointment" structure
  const payload = {
    api_key: API_KEY,
    locationID,
    staffID: body.staffID,
    appointmentTypeID: body.appointmentTypeID,
    date: body.date,
    time: body.time,
    firstName: body.patient.firstName,
    lastName: body.patient.lastName,
    email: body.patient.email,
    mobile: body.patient.mobile,
  };

  try {
    const res = await fetch(`${BASE}/setAppointment`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(payload),
    });
    const json = await res.json();
    if (json.status === "success") return NextResponse.json({ success: true });
    return NextResponse.json({ error: json.message || "Nookal rejected booking" }, { status: 400 });
  } catch (err) { return NextResponse.json({ error: "Booking failed" }, { status: 500 }); }
}