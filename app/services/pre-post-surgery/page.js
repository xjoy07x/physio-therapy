"use client";
export const dynamic = "force-static";
import React, { useEffect } from "react";
import Image from "next/image";
import surgery from "../../../public/prepost1.png";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { GiMuscleUp, GiLaserGun, GiHand, GiJawbone } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";

export default function ServiceDetailSurgery() {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top on page load
    }, []);

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Container className="py-5" style={{ paddingTop: "120px" }}>
        <h1
          className="text-center mb-5 fw-bold"
          style={{ color: "var(--color-primary-dark)" }}
        >
          Pre & Post-Surgery Physiotherapy (Shoulder, Knee, Hip & Back Surgery)
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
                src={surgery}
                alt="Pre and Post Surgery Physiotherapy"
                className="img-fluid rounded"
                width={500}
                height={400}
              />
            </Col>
            <Col lg={6}>
              {[
                "Preparing for surgery can be daunting, but the support you receive before and after your procedure plays a crucial role in your recovery. Physiotherapy helps you build strength, improve mobility, and feel more confident leading up to — and following — your operation.",
                "Before surgery, we design a tailored program to optimise strength, mobility and conditioning. Research consistently shows that patients who enter surgery better prepared experience smoother recoveries and superior long-term outcomes.",
                "After surgery, we work closely with your surgeon’s recommendations to ensure your rehabilitation progresses safely and effectively. Post-operative physiotherapy focuses on restoring movement, reducing pain and swelling, rebuilding strength, and helping you return to your normal activities at the right pace.",
                "Whether you’re undergoing knee, hip, shoulder, or back surgery, we’re here to support you every step of the way and help you achieve the best possible recovery.",
              ].map((text, idx) => (
                <p
                  key={idx}
                  style={{
                    color: "var(--color-accent)",
                    fontSize: "var(--font-size-lg)",
                    fontWeight: "var(--font-weight-regular)",
                  }}
                >
                  {text}
                </p>
              ))}
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
            Common Conditions We Treat
          </h2>
          <Row xs={1} md={2} className="g-3">
            {[
              "Knee replacements",
              "Hip replacements",
              "Knee ligament repairs",
              "Rotator cuff repairs",
              "Shoulder surgeries",
              "Ankle and foot surgery",
              "Fractures",
            ].map((cond, idx) => (
              <Col
                key={idx}
                className="d-flex align-items-center"
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--font-size-lg)",
                  fontWeight: "var(--font-weight-regular)",
                }}
              >
                <FaCheck
                  className="me-2"
                  style={{ color: "var(--color-primary-dark)" }}
                />
                <span style={{ color: "var(--color-accent)" }}>{cond}</span>
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
            Your Treatment Plan May Include
          </h2>

          <Row xs={1} md={2} className="g-4 mb-4">
            {[
              {
                title: "Strength & Muscle Re-Training",
                text: "Strengthening weaknesses, poor muscle timing, and imbalances to support safe recovery.",
              },
              {
                title: "Manual Therapy & Movement Guidance",
                text: "Hands-on techniques and guided movement to restore normal body mechanics and coordination.",
              },
              {
                title: "Balance, Gait & Proprioception",
                text: "Re-educating walking patterns, balance, and joint awareness for daily activities.",
              },
              {
                title: "Pain, Swelling & Recovery Education",
                text: "Reducing discomfort, managing swelling, and providing practical guidance throughout each stage of recovery.",
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

          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            Your rehabilitation may also include planning ongoing preventative
            strength training at home, in the gym or in group class settings,
            safely returning to hobbies or exercise, education about recovery
            expectations, and collaboration with your surgeon, GP or other
            healthcare professionals involved in your care.
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
