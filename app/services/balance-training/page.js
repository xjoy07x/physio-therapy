"use client";
export const dynamic = "force-static";
import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  GiBodyBalance,
  GiMuscleUp,
  GiWalk,
  GiShield,
} from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import laser from "../../../public/balance.png";

export default function ServiceDetailBalance() {
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
          Balance, Fall Prevention & Strengthening Exercises
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

        <p />

        <Card
          className="mb-5 shadow-sm border-0 p-4 rounded-4"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <Image
                src={laser}
                alt="Balance and Strength Training"
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
                As we age, changes in muscle strength, balance, and coordination
                can increase the risk of falls and limit everyday activities.
                Physiotherapy plays an essential role in helping older adults
                maintain stability, confidence, and independence through
                targeted strength and balance training.
              </p>
              <p
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--font-size-lg)",
                  fontWeight: "var(--font-weight-regular)",
                }}
              >
                Our approach focuses on improving functional movement while
                ensuring safety, comfort, and long-term wellbeing.
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
            How Physiotherapy Helps
          </h2>

          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-regular)",
              marginBottom: "16px",
            }}
          >
            This integrated program combines balance retraining and strengthening
            exercises, which research shows is the most effective way to reduce
            fall risk and improve mobility in older adults.
          </p>

          <Row xs={1} md={2} className="g-4 mb-4">
            {[
              {
                title: "Balance Retraining",
                text: (
                  <>
                    <p>Improve stability during standing and walking</p>
                    <p>Enhance coordination and body awareness</p>
                    <p>Build confidence in everyday movement</p>
                  </>
                ),
              },
              {
                title: "Lower Limb & Core Strengthening",
                text: (
                  <>
                    <p>Strengthen hips, knees, and ankles</p>
                    <p>Improve posture and trunk control</p>
                    <p>Enhance muscular endurance</p>
                  </>
                ),
              },
              {
                title: "Gait & Functional Training",
                text: (
                  <>
                    <p>Improve walking pattern and safety</p>
                    <p>Sit-to-stand and step-up training</p>
                    <p>Reaching and everyday task practice</p>
                  </>
                ),
              },
              {
                title: "Fall Prevention Education",
                text: (
                  <>
                    <p>Safe movement strategies at home</p>
                    <p>Environmental risk awareness</p>
                    <p>Personalised safety advice</p>
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
                      fontWeight: "var(--font-weight-regular)",
                    }}
                  >
                    {item.text}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            All programs are individually tailored based on assessment findings,
            medical history, and personal goals.
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
            Who Can Benefit
          </h2>

          <Row xs={1} md={2} className="g-3">
            {[
              "Older adults with a history of falls or fear of falling",
              "Individuals experiencing balance problems or unsteadiness",
              "Seniors recovering from illness, surgery, or injury",
              "Those wishing to improve strength, mobility, and confidence",
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
          <h2
            className="mb-3"
            style={{ color: "var(--color-primary-dark)" }}
          >
            Evidence-Based Approach
          </h2>

          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            Clinical research consistently demonstrates that combined balance
            and strength training:
          </p>

          <ul
            style={{
              fontSize: "var(--font-size-lg)",
              color: "var(--color-accent)",
            }}
          >
            <li>Reduces the risk of falls</li>
            <li>Improves walking stability and functional mobility</li>
            <li>Enhances muscle strength and endurance</li>
            <li>Supports independence and quality of life in older adults</li>
          </ul>

          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            Our physiotherapy programs follow current best-practice guidelines
            and are adjusted progressively to ensure safe and effective outcomes.
          </p>
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
            To help older adults move safely, stay strong, and maintain
            independence in everyday life.
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