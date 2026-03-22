"use client";

import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    locationId: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const locations = [
    { id: "1", name: "Deloraine Medical", address: "22 Tower Hill Street, Deloraine TAS 7304", phone: "(04) 0790 2970" },
    { id: "2", name: "Prospect Medical", address: "4 Trotters Lane, Prospect TAS 7250", phone: "(03) 6344 8512" },
    { id: "3", name: "Newstead Medical", address: "169 Elphin Road, Newstead TAS 7250", phone: "(03) 6338 9888" },
    { id: "4", name: "First Point Healthcare", address: "22 Pine Avenue, Newstead TAS 7250", phone: "(03) 6331 1166" },
    { id: "5", name: "Beaconsfield Family Medical", address: "146 Weld St, Beaconsfield TAS 7270", phone: "(03) 6383 1511" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const nameParts = formData.name.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "Enquiry";

    const Swal = (await import("sweetalert2")).default;

    try {
      const response = await fetch("/api/nookal/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName, lastName, email: formData.email,
          locationId: formData.locationId, subject: formData.subject, message: formData.message,
        }),
      });

      if (response.ok) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        Swal.fire({
          title: "Message Sent!",
          text: "Your inquiry has been sent to the clinic's Message Centre.",
          icon: "success",
          confirmButtonColor: "var(--color-primary-dark)",
        });
        setFormData({ name: "", email: "", locationId: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to connect to Nookal");
      }
    } catch (err) {
      Swal.fire({ title: "Submission Failed", icon: "error", confirmButtonColor: "#d33" });
    } finally {
      setLoading(false);
    }
  };

  const textStyle = {
    color: "var(--color-accent)",
    fontSize: "var(--font-size-mlg)",
    fontWeight: "var(--font-weight-regular)",
  };

  // Shared Header Style for alignment
  const headerStyle = {
    color: "var(--color-primary-dark)",
    fontWeight: "var(--font-weight-bold)",
    fontSize: "2rem", // Explicitly set to ensure H1 and H2 match
  };

  return (
    <div style={{ backgroundColor: "#ffff", paddingBottom: "100px" }}>
      <Container className="my-5">
        <Row className="g-4 d-flex align-items-stretch">
          {/* Left Side: Clinic Information */}
          <Col lg={5}>
            <Card 
              className="pt-0 px-4 pb-4 pt-md-0 px-md-5 pb-md-5 shadow-sm border-0 h-100"
              style={{ backgroundColor: "var(--color-card)", borderRadius: "15px" }}
            >
              <h2 
                className="border-start border-3 ps-3 mb-4 m-0" 
                style={headerStyle}
              >
                Our Locations
              </h2>
              {locations.map((loc) => (
                <div key={loc.id} className="mb-4 ps-3">
                  <p className="mb-1" style={{ ...textStyle, fontWeight: "var(--font-weight-bold)", color: "var(--color-primary-dark)" }}>
                      {loc.name}
                  </p>
                  <p className="mb-1" style={textStyle}>
                    <FaMapMarkerAlt className="me-2" style={{ color: "var(--color-primary-dark)" }} />
                    {loc.address}
                  </p>
                  <p className="mb-0" style={textStyle}>
                    <FaPhone className="me-2" style={{ color: "var(--color-primary-dark)" }} />
                    {loc.phone}
                  </p>
                </div>
              ))}
            </Card>
          </Col>

          {/* Right Side: Contact Form */}
          <Col lg={7}>
            <Card 
              className="pt-0 px-4 pb-4 pt-md-0 px-md-5 pb-md-5 shadow-sm border-0 h-100"
              style={{ backgroundColor: "var(--color-card)", borderRadius: "15px" }}
            >
              <h1 
                className="mb-4 m-0" 
                style={headerStyle}
              >
                Contact Us
              </h1>
              
              <Form onSubmit={handleSubmit} className="mt-4">
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Control name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required style={{ padding: "12px" }} />
                  </Col>
                  <Col md={6}>
                    <Form.Control type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required style={{ padding: "12px" }} />
                  </Col>
                  <Col md={12}>
                    <Form.Select name="locationId" value={formData.locationId} onChange={handleChange} required style={{ padding: "12px" }}>
                      <option value="">Select a Clinic Location</option>
                      {locations.map((l) => <option key={l.id} value={l.id}>{l.name}</option>)}
                    </Form.Select>
                  </Col>
                  <Col md={12}>
                    <Form.Control name="subject" placeholder="What is this regarding?" value={formData.subject} onChange={handleChange} required style={{ padding: "12px" }} />
                  </Col>
                  <Col md={12}>
                    <Form.Control as="textarea" rows={4} name="message" placeholder="Write your message here..." value={formData.message} onChange={handleChange} required />
                  </Col>
                  <Col md={12}>
                    <Button 
                      type="submit" 
                      disabled={loading} 
                      className="w-100 py-3 text-white border-0 shadow-sm mt-2" 
                      style={{ backgroundColor: "var(--color-primary-dark)", borderRadius: "50px", fontWeight: "var(--font-weight-bold)" }}
                    >
                      {loading ? "SENDING..." : "SEND MESSAGE"}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}