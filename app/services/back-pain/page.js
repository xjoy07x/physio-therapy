"use client";
export const dynamic = "force-static";
import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  GiSpineArrow,
  GiMuscleUp,
  GiMovementSensor,
  GiHealthNormal,
} from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import backPain from "../../../public/backpain1.png";

export default function ServiceDetailBackPain() {
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
          Physiotherapy for Back Pain
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
                src={backPain}
                alt="Lower Back Pain Physiotherapy"
                className="img-fluid rounded"
                width={500}
                height={400}
              />
            </Col>
            <Col lg={6}>
              <h4 style={{ color: "var(--color-primary-dark)" }}>
                Understanding Back Pain
              </h4>
              <p
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--font-size-lg)",
                }}
              >
                Lower back pain is one of the most common musculoskeletal
                conditions and can affect daily activities such as sitting,
                walking, bending, and sleeping. It may develop suddenly due to
                injury or gradually due to posture, repetitive strain, or
                age-related changes.
              </p>

              <ul
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--font-size-mlg)",
                }}
              >
                <li>Muscle strain or weakness</li>
                <li>Joint stiffness or reduced spinal mobility</li>
                <li>Poor posture or prolonged sitting</li>
                <li>Disc-related conditions</li>
                <li>Degenerative changes such as arthritis</li>
                <li>Reduced core strength and movement control</li>
              </ul>

              <p
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--font-size-lg)",
                }}
              >
                Physiotherapy focuses on understanding why your pain is
                occurring, not just where you feel it.
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
            Our Physiotherapy Approach
          </h2>

          <Row xs={1} md={2} className="g-4">
            {[
              {
                title: "Pain Relief & Symptom Management",
                text: (
                  <>
                    <p>
                      Techniques to reduce pain and stiffness using adjunct
                      modalities (dry needling / laser)
                    </p>
                    <p>
                      Gentle manual therapy to improve joint and soft tissue
                      mobility
                    </p>
                    <p>
                      Advice on modifying activities to reduce aggravation
                    </p>
                  </>
                ),
              },
              {
                title: "Movement & Postural Retraining",
                text: (
                  <>
                    <p>
                      Assessment and correction of posture and movement patterns
                    </p>
                    <p>
                      Education on safe bending, lifting, and sitting positions
                    </p>
                    <p>
                      Ergonomic advice for work and daily activities
                    </p>
                  </>
                ),
              },
              {
                title: "Strengthening & Stability",
                text: (
                  <>
                    <p>
                      Core and spinal stabilisation exercises to support the
                      lower back
                    </p>
                    <p>
                      Strengthening of hip and lower-limb muscles influencing
                      spinal load
                    </p>
                    <p>
                      Gradual progression to restore confidence in movement
                    </p>
                  </>
                ),
              },
              {
                title: "Flexibility & Mobility",
                text: (
                  <>
                    <p>Stretching programs to reduce muscle tightness</p>
                    <p>Exercises to improve spinal and hip mobility</p>
                    <p>
                      Techniques to enhance overall movement efficiency
                    </p>
                  </>
                ),
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
                  <div
                    style={{
                      color: "var(--color-accent)",
                      fontSize: "var(--font-size-mlg)",
                    }}
                  >
                    {item.text}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        <Card
          className="p-4 mb-5 shadow-sm border-0 rounded-4"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <h2 style={{ color: "var(--color-primary-dark)" }}>
            Conditions Commonly Treated
          </h2>

          <Row xs={1} md={2} className="g-3 mt-2">
            {[
              "Acute and chronic lower back pain",
              "Recurrent back pain episodes",
              "Sciatic-type or nerve-related symptoms",
              "Disc-related pain",
              "Mechanical and postural back pain",
              "Age-related spinal stiffness",
            ].map((item, idx) => (
              <Col
                key={idx}
                className="d-flex align-items-center"
                style={{ fontSize: "var(--font-size-lg)" }}
              >
                <FaCheck
                  className="me-2"
                  style={{ color: "var(--color-primary-dark)" }}
                />
                <span style={{ color: "var(--color-accent)" }}>{item}</span>
              </Col>
            ))}
          </Row>
        </Card>

        <Card
          className="p-4 mb-5 shadow-sm border-0 rounded-4"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <h2 style={{ color: "var(--color-primary-dark)" }}>
            Education & Self-Management
          </h2>

          <ul
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            <li>Clear explanations of your pain and recovery process</li>
            <li>Home exercise programs tailored to your needs</li>
            <li>Strategies to prevent recurrence and manage flare-ups</li>
            <li>Guidance to help you stay active safely</li>
          </ul>
        </Card>

        <Card
          className="p-4 mb-5 shadow-sm border-0 rounded-4"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <h2 style={{ color: "var(--color-primary-dark)" }}>
            Evidence-Based Care
          </h2>

          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            Studies consistently show that active physiotherapy management,
            including exercise therapy and patient education, is more effective
            than rest alone for both short- and long-term outcomes in lower back
            pain.
          </p>

          <ul
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            <li>Reduce pain</li>
            <li>Improve movement and strength</li>
            <li>Return to daily activities with confidence</li>
            <li>Prevent future episodes</li>
          </ul>
        </Card>

        <Card
          className="p-4 mb-5 shadow-sm border-0 rounded-4"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <h2 style={{ color: "var(--color-primary-dark)" }}>
            Our Goal
          </h2>

          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            To help you move better, feel stronger, and manage lower back pain
            with confidence and long-term results.
          </p>
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