export const dynamic = "force-static";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  GiMeditation,
  GiMuscleUp,
  GiHand,
  GiBrain,
  GiLaserGun,
  GiBodyBalance,
} from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import pain from "../../../public/pm1.png";
import Image from "next/image";

export default function ServiceDetailPM() {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Container className="py-5" style={{ paddingTop: "120px" }}>
        <h1
          className="text-center mb-5 fw-bold"
          style={{ color: "var(--color-primary-dark)" }}
        >
          Pain Management
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

        {/* Top Section: Description */}
        <Card
          className="mb-5 shadow-sm border-0 p-4 rounded-4"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <Image
                src={pain}
                alt="Pain Management"
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
                Pain is a universal human experience — one that can deeply
                affect your physical comfort, emotional wellbeing,
                relationships, and daily life. Whether caused by injury, medical
                conditions, nerve irritation, arthritis, or everyday wear and
                tear, living with pain can feel exhausting and overwhelming.
              </p>
              <p
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--font-size-lg)",
                  fontWeight: "var(--font-weight-regular)",
                }}
              >
                Physiotherapy plays a vital role in managing both acute and
                chronic pain. Our approach blends clinical expertise with
                genuine compassion, focusing not only on your symptoms, but on
                how pain affects your confidence, function, and quality of life.
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
            Understanding Your Pain
          </h2>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            Understanding the cause of your pain is the first step toward
            meaningful relief. Chronic conditions such as arthritis, lower back
            pain, and persistent musculoskeletal discomfort can be debilitating
            — but physiotherapy offers a non-invasive, holistic, and
            evidence-informed pathway to recovery.
          </p>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            Our goal is to help you regain mobility, strength, independence, and
            a renewed sense of hope through individualized care.
          </p>
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
            Our Pain Management Approach
          </h2>

          <Row xs={1} md={2} className="g-4 mb-4">
            {[
              {
                title: "Therapeutic Exercise",
                text: "Tailored exercises designed to restore movement, improve strength, and build confidence in your body.",
              },
              {
                title: "Manual Therapy",
                text: "Hands-on techniques and soft tissue work to reduce pain, stiffness, and muscular tension.",
              },
              {
                title: "Movement Retraining",
                text: "Correcting movement patterns and modifying activities to prevent flare-ups and overload.",
              },
              {
                title: "Education & Nervous System Care",
                text: "Helping you understand pain, calm sensitivity, and regain control through evidence-based education.",
              },
              {
                title: "Whole-Person Perspective",
                text: "Addressing physical, emotional, and lifestyle factors that influence your pain experience.",
              },
              {
                title: "Dry Needling / Laser Therapy",
                text: "Used when appropriate to reduce pain, improve circulation, and support tissue healing.",
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
                      color: "var(--color-accent)",
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
            Looking Beyond Symptoms
          </h2>
          <Row xs={1} md={2} className="g-3">
            {[
              "Lifestyle and work demands",
              "Sleep quality and recovery",
              "Stress levels and emotional load",
              "Posture and movement habits",
              "Nervous system sensitivity",
              "Previous injuries or trauma",
            ].map((item, index) => (
              <Col
                key={index}
                className="d-flex align-items-center"
                style={{ fontSize: "var(--font-size-lg)" }}
              >
                <FaCheck className="text-success me-2" />
                <span style={{ color: "var(--color-accent)" }}>{item}</span>
              </Col>
            ))}
          </Row>
          <p
            className="mt-3"
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            By addressing the full picture — not just symptoms — we can provide
            meaningful, lasting relief and equip you with strategies to prevent
            future flare-ups.
          </p>
          <p
            className="mt-3"
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            Together, we work toward the fastest and most sustainable recovery,
            helping you heal, strengthen, move, and thrive.
          </p>
        </Card>
      </Container>

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
    </div>
  );
}
