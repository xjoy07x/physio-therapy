"use client";

import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const locations = [
    { id: "1", name: "Deloraine Medical", address: "22 Tower Hill Street, Deloraine TAS 7304", phone: "0497902970" },
    { id: "2", name: "Prospect Medical", address: "4 Trotters Lane, Prospect TAS 7250", phone: "(03) 6344 8512" },
    { id: "3", name: "Newstead Medical", address: "169 Elphin Road, Newstead TAS 7250", phone: "(03) 6338 9888" },
    { id: "4", name: "First Point Healthcare", address: "22 Pine Avenue, Newstead TAS 7250", phone: "(03) 6331 1166" },
    { id: "5", name: "Beaconsfield Family Medical", address: "146 Weld St, Beaconsfield TAS 7270", phone: "(03) 6383 1511" }
  ];

  const textStyle = {
    color: "var(--color-accent)",
    fontSize: "var(--font-size-mlg)",
    fontWeight: "var(--font-weight-regular)",
  };

  const headerStyle = {
    color: "var(--color-primary-dark)",
    fontWeight: "var(--font-weight-bold)",
    fontSize: "2rem",
  };

  return (
    <div style={{ backgroundColor: "#ffff", paddingBottom: "100px" }}>
      <Container className="my-5">
        <Row className="g-4 d-flex align-items-stretch">
          
          {/* Left Side: Clinic Information */}
          <Col lg={4}>
            <Card 
              className="p-4 shadow-sm border-0 h-100"
              style={{ backgroundColor: "var(--color-card)", borderRadius: "15px" }}
            >
              <h2 className="border-start border-3 ps-3 mb-4" style={headerStyle}>
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

          {/* Right Side: Nookal Embed */}
          <Col lg={8}>
            <Card 
              className="p-4 shadow-sm border-0 h-100" 
              style={{ backgroundColor: "var(--color-card)", borderRadius: "15px", position: "relative" }}
            >
              <h1 className="mb-4 text-center" style={headerStyle}>
                Contact Us
              </h1>

              {/* Updated styled text */}
              <p className="text-center mb-4" style={textStyle}>
                Please check the reCAPTCHA at the bottom of the form to proceed.
              </p>

              <div style={{ borderRadius: "10px", overflow: "hidden", minHeight: "600px", position: "relative" }}>
                {/* Loading Spinner */}
                {isIframeLoading && (
                  <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "400px" }}>
                    <Spinner animation="border" style={{ color: "var(--color-primary-dark)" }} />
                    <p className="mt-3" style={textStyle}>Loading Form...</p>
                  </div>
                )}

                <iframe 
                  src="https://auzone1.nookal.com/external/intakeform/embed?q=ZlkzL0lXbC9ucEtLRHBzQlFvMmVPM3JkajFGbnhYaTAvbW9XU0h1ZUVyRElwUlFqTEdYV2hRVmIrT3J3RWVrNlp3NFlXbVVZc1FKdW5qNVEzRDN2MFlSNkFrdFpsdGJaRUhpZmUrc3ZJNi9LYlpBT1c2ckNrYUpsTkJjOGMrMUxLdmZ4ZXFTakR5dm5jOElMTWpjRk1rdCtkMEQvMTBSUnRvY281a3NHeVBRPQ%3D%3D" 
                  width="100%" 
                  height="700px" // Increased to ensure the Finish button isn't hidden
                  scrolling="no"
                  onLoad={() => setIsIframeLoading(false)}
                  style={{ 
                    border: "none", 
                    display: isIframeLoading ? "none" : "block" 
                  }}
                  title="Nookal Intake Form"
                />
              </div>
            </Card>
          </Col>

        </Row>
      </Container>
    </div>
  );
}