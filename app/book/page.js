// "use client";
// import { useState, useEffect } from "react";
// import Calendar from 'react-calendar'; 
// import 'react-calendar/dist/Calendar.css'; 
// import { Container, Row, Col, Button, Card, Spinner, Form, Alert, ProgressBar } from "react-bootstrap";

// export default function BookingStepper() {
//   const [step, setStep] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSlotLoading, setIsSlotLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Data State
//   const [locations, setLocations] = useState([]);
//   const [appointmentTypes, setAppointmentTypes] = useState([]);
//   const [practitioners, setPractitioners] = useState([]);
//   const [availableSlots, setAvailableSlots] = useState([]);

//   // Selection State
//   const [locationId, setLocationId] = useState("");
//   const [appointmentTypeId, setAppointmentTypeId] = useState("");
//   const [practitionerId, setPractitionerId] = useState("");
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState("");
//   const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", mobile: "" });

//   // Robust date formatter for Nookal (YYYY-MM-DD)
//   const formatNookalDate = (date) => {
//     if (!date) return "";
//     const d = new Date(date);
//     const year = d.getFullYear();
//     const month = String(d.getMonth() + 1).padStart(2, '0');
//     const day = String(d.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };

//   // 1. Initial Load: Locations
//   useEffect(() => {
//     const fetchLocations = async () => {
//       setIsLoading(true);
//       try {
//         const res = await fetch("/api/nookal/locations");
//         const data = await res.json();
//         if (res.ok) setLocations(data);
//         else setError(data.error || "Could not load locations.");
//       } catch (err) { setError("Network error: Failed to connect."); }
//       finally { setIsLoading(false); }
//     };
//     fetchLocations();
//   }, []);

//   // 2. Fetch Services
//   const goToServices = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const res = await fetch(`/api/nookal/appointment-types?locationId=${locationId}`);
//       const data = await res.json();
//       if (res.ok) { 
//         setAppointmentTypes(data); 
//         setStep(2); 
//       } else {
//         setError("Failed to load services.");
//       }
//     } catch (err) { setError("Failed to connect to services."); }
//     finally { setIsLoading(false); }
//   };

//   // 3. Fetch Practitioners
//   const goToPractitioners = async () => {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const res = await fetch(`/api/nookal/practitioners?locationId=${locationId}`);
//       const data = await res.json();
//       if (res.ok) { 
//         setPractitioners(data); 
//         setStep(3); 
//       } else {
//         setError("Failed to load practitioners.");
//       }
//     } catch (err) { setError("Failed to load practitioners."); }
//     finally { setIsLoading(false); }
//   };

//   // 4. Fetch Slots (Strict Mapping for v2)
//   const handleDateChange = async (date) => {
//     setSelectedDate(date);
//     setSelectedTime("");
    
//     if (!locationId || !practitionerId || !appointmentTypeId) {
//       setError("Please ensure Clinic, Service, and Practitioner are selected.");
//       return;
//     }

//     const dateStr = formatNookalDate(date);
//     setIsSlotLoading(true);
//     setError(null);

//     try {
//       // POST to our internal proxy which maps practitionerId -> staffID
//       const res = await fetch(`/api/nookal/availability`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           locationId,
//           practitionerId, 
//           appointmentTypeId,
//           date: dateStr
//         })
//       });

//       const data = await res.json();
//       if (res.ok) {
//         setAvailableSlots(data);
//         if (data.length === 0) setError("No slots available for this specific date.");
//       } else {
//         setAvailableSlots([]);
//         setError(data.error || "No appointments found for this day.");
//       }
//     } catch (err) { 
//       setError("Server connection failed."); 
//     } finally { 
//       setIsSlotLoading(false); 
//     }
//   };

//   // 5. Final Booking
//   const handleBooking = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//       const res = await fetch("/api/nookal/book", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           locationID: locationId,
//           staffID: practitionerId,
//           appointmentTypeID: appointmentTypeId,
//           date: formatNookalDate(selectedDate),
//           time: selectedTime,
//           patient: formData,
//         }),
//       });
//       if (res.ok) setStep(6);
//       else {
//         const result = await res.json();
//         setError(result.error || "Booking failed.");
//       }
//     } catch (err) { setError("System error during booking."); }
//     finally { setIsLoading(false); }
//   };

//   return (
//     <Container className="py-5">
//       <style>{`
//         .react-calendar { width: 100%; border: none; font-family: inherit; border-radius: 12px; }
//         .react-calendar__tile--active { background: #2b7a63 !important; color: white; border-radius: 8px; }
//         .slot-pill { border: 1px solid #2b7a63; color: #2b7a63; transition: 0.2s; font-weight: 600; border-radius: 10px; }
//         .slot-pill:hover, .selected-slot { background: #2b7a63 !important; color: white !important; }
//         .booking-card { background-color: #fcf6f1; border-radius: 20px; border: none; }
//       `}</style>

//       <Row className="justify-content-center">
//         <Col md={11} lg={9}>
//           <ProgressBar now={(step / 6) * 100} variant="success" className="mb-4 shadow-sm" style={{ height: '8px' }} />
          
//           {error && <Alert variant="danger" dismissible onClose={() => setError(null)}>{error}</Alert>}

//           {/* STEP 1: CLINIC */}
//           {step === 1 && (
//             <Card className="p-4 shadow-sm booking-card">
//               <h3 className="mb-4 fw-bold text-dark">1. Select Clinic Location</h3>
//               {isLoading ? <div className="text-center py-5"><Spinner animation="border" variant="success" /></div> : (
//                 <Row>
//                   {locations.map((l) => (
//                     <Col md={6} key={l.id} className="mb-3">
//                       <Button 
//                         variant={locationId === l.id ? "success" : "outline-dark"} 
//                         className="w-100 py-3 shadow-sm" 
//                         onClick={() => setLocationId(l.id)}
//                       >
//                         {l.name} <br/> <small>{l.city}</small>
//                       </Button>
//                     </Col>
//                   ))}
//                 </Row>
//               )}
//               <Button className="mt-4 w-100 py-3 fw-bold" disabled={!locationId} onClick={goToServices} style={{ backgroundColor: "#2b7a63", border: "none" }}>Next</Button>
//             </Card>
//           )}

//           {/* STEP 2: SERVICE */}
//           {step === 2 && (
//             <Card className="p-4 shadow-sm booking-card">
//               <h3 className="mb-4 fw-bold text-dark">2. Select Service</h3>
//               <Row>
//                 {appointmentTypes.map((t) => (
//                   <Col md={6} key={t.id} className="mb-3">
//                     <Button 
//                       variant={appointmentTypeId === t.id ? "success" : "outline-dark"} 
//                       className="w-100 py-3 shadow-sm" 
//                       onClick={() => setAppointmentTypeId(t.id)}
//                     >
//                       {t.name}
//                     </Button>
//                   </Col>
//                 ))}
//               </Row>
//               <div className="d-flex gap-2 mt-4">
//                 <Button variant="secondary" onClick={() => setStep(1)}>Back</Button>
//                 <Button className="flex-grow-1 fw-bold" disabled={!appointmentTypeId} onClick={goToPractitioners} style={{ backgroundColor: "#2b7a63", border: "none" }}>Next</Button>
//               </div>
//             </Card>
//           )}

//           {/* STEP 3: PRACTITIONER */}
//           {step === 3 && (
//             <Card className="p-4 shadow-sm booking-card">
//               <h3 className="mb-4 fw-bold text-dark">3. Select Practitioner</h3>
//               <Row>
//                 {practitioners.map((p) => (
//                   <Col md={6} key={p.id} className="mb-3">
//                     <Button 
//                       variant={practitionerId === p.id ? "success" : "outline-dark"} 
//                       className="w-100 py-3 shadow-sm" 
//                       onClick={() => setPractitionerId(p.id)}
//                     >
//                       {p.name}
//                     </Button>
//                   </Col>
//                 ))}
//               </Row>
//               <div className="d-flex gap-2 mt-4">
//                 <Button variant="secondary" onClick={() => setStep(2)}>Back</Button>
//                 <Button className="flex-grow-1 fw-bold" disabled={!practitionerId} onClick={() => setStep(4)} style={{ backgroundColor: "#2b7a63", border: "none" }}>Next</Button>
//               </div>
//             </Card>
//           )}

//           {/* STEP 4: CALENDAR & SLOTS */}
//           {step === 4 && (
//             <Card className="p-4 shadow-sm booking-card">
//               <Row>
//                 <Col md={6} className="border-end pe-md-4">
//                   <h4 className="mb-4 fw-bold">4. Pick a Date</h4>
//                   <Calendar 
//                     onChange={handleDateChange} 
//                     value={selectedDate}
//                     // minDate={new Date()}
//                     className="shadow-sm p-2 border"
//                   />
//                 </Col>
//                 <Col md={6} className="ps-md-4">
//                   <h4 className="fw-bold mt-3 mt-md-0">Available Times</h4>
//                   <div style={{ minHeight: "250px", maxHeight: "350px", overflowY: "auto" }}>
//                     {isSlotLoading ? (
//                       <div className="text-center py-5"><Spinner animation="border" variant="success" /></div>
//                     ) : availableSlots.length > 0 ? (
//                       <Row className="g-2">
//                         {availableSlots.map((slot, i) => (
//                           <Col xs={6} key={i}>
//                             <Button 
//                               variant="outline-light"
//                               className={`w-100 py-2 slot-pill ${selectedTime === slot.startTime ? 'selected-slot' : ''}`}
//                               onClick={() => setSelectedTime(slot.startTime)}
//                             >
//                               {slot.startTime}
//                             </Button>
//                           </Col>
//                         ))}
//                       </Row>
//                     ) : (
//                       <p className="text-center text-muted py-5">
//                         {practitionerId ? "No times available for this date." : "Selection incomplete."}
//                       </p>
//                     )}
//                   </div>
//                 </Col>
//               </Row>
//               <div className="d-flex gap-2 mt-4 pt-3 border-top">
//                 <Button variant="secondary" onClick={() => setStep(3)}>Back</Button>
//                 <Button className="flex-grow-1 fw-bold" disabled={!selectedTime} onClick={() => setStep(5)} style={{ backgroundColor: "#2b7a63", border: "none" }}>Next</Button>
//               </div>
//             </Card>
//           )}

//           {/* STEP 5: DETAILS */}
//           {step === 5 && (
//             <Card className="p-4 shadow-sm booking-card">
//               <h3 className="mb-4 fw-bold">5. Your Details</h3>
//               <div className="bg-white p-3 rounded mb-4 border shadow-sm">
//                 <strong>{locations.find(l => l.id === locationId)?.name}</strong><br/>
//                 <strong>{appointmentTypes.find(t => t.id === appointmentTypeId)?.name}</strong> with <strong>{practitioners.find(p => p.id === practitionerId)?.name}</strong><br/>
//                 On <strong>{formatNookalDate(selectedDate)}</strong> at <strong>{selectedTime}</strong>
//               </div>
//               <Form onSubmit={handleBooking}>
//                 <Row>
//                   <Col md={6}><Form.Group className="mb-3"><Form.Label>First Name</Form.Label><Form.Control required onChange={(e) => setFormData({...formData, firstName: e.target.value})} /></Form.Group></Col>
//                   <Col md={6}><Form.Group className="mb-3"><Form.Label>Last Name</Form.Label><Form.Control required onChange={(e) => setFormData({...formData, lastName: e.target.value})} /></Form.Group></Col>
//                 </Row>
//                 <Form.Group className="mb-3"><Form.Label>Email</Form.Label><Form.Control type="email" required onChange={(e) => setFormData({...formData, email: e.target.value})} /></Form.Group>
//                 <Form.Group className="mb-4"><Form.Label>Mobile</Form.Label><Form.Control required onChange={(e) => setFormData({...formData, mobile: e.target.value})} /></Form.Group>
//                 <div className="d-flex gap-2">
//                   <Button variant="secondary" onClick={() => setStep(4)}>Back</Button>
//                   <Button type="submit" className="flex-grow-1 fw-bold" disabled={isLoading} style={{ backgroundColor: "#2b7a63", border: "none" }}>
//                     {isLoading ? <Spinner size="sm" /> : "Confirm Booking"}
//                   </Button>
//                 </div>
//               </Form>
//             </Card>
//           )}

//           {/* STEP 6: SUCCESS */}
//           {step === 6 && (
//             <Card className="p-5 text-center shadow-sm booking-card">
//               <h2 className="text-success fw-bold mb-3">Booking Confirmed!</h2>
//               <p className="text-muted mb-4">We've sent a confirmation to {formData.email}.</p>
//               <Button variant="outline-dark" onClick={() => window.location.reload()}>Book Another Session</Button>
//             </Card>
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// }

"use client";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function BookingPage() {
  // 🔥 REPLACE THIS with your actual Nookal Online Booking URL
  // You can find this in Nookal: Setup -> (Integrations) -> Online Booking
  const NOOKAL_BOOKING_URL = process.env.NEXT_PUBLIC_NOOKAL_BOOKING_URL;

  const handleBookNow = () => {
    // Opens your Nookal page in a new tab so they don't lose your website
    window.open(NOOKAL_BOOKING_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <Container className="py-5 d-flex align-items-center" style={{ minHeight: "60vh" }}>
      <Row className="justify-content-center w-100">
        <Col md={6} lg={5}>
          <Card className="p-5 text-center shadow border-0" style={{ borderRadius: '20px', backgroundColor: '#fcf6f1' }}>
            <h2 className="fw-bold mb-3" style={{ color: '#2b7a63' }}>Ready to Schedule?</h2>
            <p className="text-muted mb-4">
              Click the button below to view our live availability and book your appointment through our secure portal.
            </p>
            <Button 
              size="lg" 
              onClick={handleBookNow}
              className="w-100 py-3 fw-bold shadow-sm"
              style={{ backgroundColor: "#2b7a63", border: "none", fontSize: '1.2rem' }}
            >
              Book Appointment Now
            </Button>
            <small className="text-muted d-block mt-3">
              Powered by Nookal
            </small>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}