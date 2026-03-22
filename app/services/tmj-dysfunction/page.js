"use client";
export const dynamic = "force-static";
import React, { useEffect } from "react";
import Image from "next/image";
import tmj from "../../../public/tmj.png"; // put your image in the public folder
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  GiMuscleUp,
  GiLaserGun,
  GiHand,
  GiJawbone,
  GiBodyBalance,
} from "react-icons/gi";
import { FaSyringe, FaCheck } from "react-icons/fa";

export default function ServiceDetailTMJ() {
   useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top on page load
      }, []);

  return (
    <div style={{ backgroundColor: "#ffff" }}>
      <Container className="py-5" style={{ paddingTop: "120px" }}>
        <h1
          className="text-center mb-5 fw-bold"
          style={{ color: "var(--color-primary-dark)" }}
        >
          TMJ (Temporomandibular Joint) Dysfunction
          <span
            className="d-block mx-auto mt-2"
            style={{
              width: "70px",
              height: "3px",
              backgroundColor: "var(--color-primary-dark)",
              borderRadius: "5px",
            }}
          ></span>
        </h1>

        <Card
          className="mb-5 shadow-sm border-0 p-4 rounded-4"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <Image
                src={tmj}
                alt="TMJ Dysfunction"
                className="img-fluid rounded"
                width={500}
                height={400}
              />
            </Col>
            <Col lg={6}>
              <p
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--font-size-lg)",
                  fontWeight: "var(--font-weight-regular)",
                }}
              >
                TMJ dysfunction — commonly known as jaw pain — involves
                conditions that cause discomfort, tension, or restricted
                movement in the jaw and surrounding areas. These symptoms can
                interfere with speaking, eating, sleeping, and daily activities.
              </p>
            </Col>
          </Row>
        </Card>

        <Card
          className="p-4 mb-5 shadow-sm border-0 rounded-4"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <h2
            className="mb-4 border-start border-3 ps-3"
            style={{
              borderColor: "var(--color-primary-dark)",
              color: "var(--color-primary-dark)",
            }}
          >
            What Is TMJ Dysfunction?
          </h2>
          <p
            style={{
              fontSize: "var(--font-size-lg)",
              color: "var(--color-accent)",
            }}
          >
            Your temporomandibular joint (TMJ) connects your jaw to your skull
            and plays an important role in chewing, talking and facial
            expression. When the joint or surrounding muscles become tight,
            irritated or misaligned, you may experience a range of symptoms
            including:
          </p>
          <Row xs={1} md={2} className="g-3">
            {[
              "Jaw pain or stiffness",
              "Clicking or popping when opening your mouth",
              "Headaches or facial tension",
              "Ear symptoms such as ringing, pain or pressure",
              "Pain when chewing",
              "Jaw locking or limited movement",
              "Neck and upper-back tightness",
            ].map((symptom, idx) => (
              <Col
                key={idx}
                className="d-flex align-items-center"
                style={{
                  fontSize: "var(--font-size-lg)",
                  fontWeight: "var(--font-weight-regular)",
                  color: "var(--color-accent)",
                }}
              >
                <FaCheck
                  className="me-2"
                  style={{ color: "var(--color-primary-dark)" }}
                />
                {symptom}
              </Col>
            ))}
          </Row>
        </Card>

        <Card
          className="p-4 mb-5 shadow-sm border-0 rounded-4"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <h2
            className="mb-4 border-start border-3 ps-3"
            style={{
              borderColor: "var(--color-primary-dark)",
              color: "var(--color-primary-dark)",
            }}
          >
            How Physiotherapy Can Help
          </h2>

          <h4 className="mb-3" style={{ color: "var(--color-primary-dark)" }}>
            Hands-On Techniques for Relief
          </h4>
          <Row xs={1} md={2} className="g-4 mb-4">
            {[
              {
                title: "TMJ Joint Mobilisation",
                text: "Restores smooth jaw movement, reduces stiffness, and assists with locking.",
              },
              {
                title: "Soft Tissue & Myofascial Release",
                text: "Releases trigger points and muscle tension in the jaw, neck, and upper back to ease referred pain.",
              },
              {
                title: "Dry Needling (when appropriate)",
                text: "Targets overactive chewing muscles to break the pain cycle and improve muscle coordination.",
              },
              {
                title: "Low-Level Laser Therapy",
                text: "May enhance tissue repair, improve circulation, reduce inflammation, and modulate pain.",
              },
            ].map((item, idx) => (
              <Col key={idx}>
                <Card
                  className="h-100 p-3 shadow-sm text-center"
                  style={{
                    borderLeft: "6px solid var(--color-primary-dark)",
                    borderRadius: "0.5rem",
                  }}
                >
                  <div className="mb-2">{item.icon}</div>
                  <h5
                    style={{
                      color: "var(--color-primary-dark)",
                      fontWeight: "var(--font-weight-bold)",
                    }}
                  >
                    {item.title}
                  </h5>
                  <p
                    style={{
                      color: "var(--color-accent)",
                      fontSize: "var(--font-size-mlg)",
                      fontWeight: "var(--font-weight-regular)",
                    }}
                  >
                    {item.text}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>

          <h4 className="mb-3" style={{ color: "var(--color-primary-dark)" }}>
            Jaw Strengthening, Habit Re-Training & Postural Care
          </h4>
          <Row xs={1} md={3} className="g-4 mb-4">
            {[
              {
                title: "Jaw Stabilisation Exercises",
                text: "Support proper joint alignment and restore efficient jaw mechanics.",
              },
              {
                title: "Neuromuscular Re-education",
                text: "Helps eliminate habits like clenching, grinding, or jaw protrusion.",
              },
              {
                title: "Postural Correction",
                text: "Reduces strain on the TMJ by addressing forward-head posture and shoulder tension patterns.",
              },
            ].map((item, idx) => (
              <Col key={idx}>
                <Card
                  className="h-100 p-3 shadow-sm text-center"
                  style={{
                    borderLeft: "6px solid var(--color-primary-dark)",
                    borderRadius: "0.5rem",
                  }}
                >
                  <div className="mb-2">{item.icon}</div>
                  <h5
                    style={{
                      fontWeight: "var(--font-weight-bold)",
                      color: "var(--color-primary-dark)",
                    }}
                  >
                    {item.title}
                  </h5>
                  <p
                    style={{
                      color: "var(--color-accent)",
                      fontSize: "var(--font-size-mlg)",
                      fontWeight: "var(--font-weight-regular)",
                    }}
                  >
                    {item.text}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        <a
          href="/book"
          style={{
            position: "fixed",
            right: "30px",
            bottom: "30px",
            zIndex: 999,
          }}
        >
          <Button
            className="btn-lg rounded-pill px-5 shadow-lg"
            style={{
              backgroundColor: "var(--color-primary-dark)",
              borderColor: "var(--color-primary-dark)",
            }}
          >
            Book Your Appointment
          </Button>
        </a>
      </Container>
    </div>
  );
}
