"use client";
export const dynamic = "force-static";
import React, { useEffect } from "react";
import Image from "next/image";
import headneck from "../../../public/head&neckPain1.png";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

export default function ServiceDetailHNP() {
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
          Headache & Neck Pain
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
                src={headneck}
                alt="Headache and Neck Pain"
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
                Neck pain can affect every part of daily life — from
                concentration and sleep to work, driving, and simply feeling at
                ease in your body. Whether your symptoms are acute, persistent,
                or complex, our goal is to understand the root cause and support
                you with compassionate, personalised care.
              </p>
              <p
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--font-size-lg)",
                  fontWeight: "var(--font-weight-regular)",
                }}
              >
                Headaches are also incredibly common, and when they become
                frequent or disruptive, they can significantly impact your
                energy, focus, and overall quality of life. Chronic neck pain
                often accompanies persistent headaches, creating a cycle of
                tension and discomfort that feels difficult to break.
              </p>
            </Col>
          </Row>
        </Card>

        <Card
          className="p-4 mb-5 shadow-sm border-0 rounded-4"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <h2
            className="mb-4 ps-3"
            style={{
              borderLeft: "6px solid var(--color-primary-dark)",
              paddingLeft: "1rem",
              color: "var(--color-primary-dark)",
            }}
          >
            Common Headache Types We Support
          </h2>
          <Row xs={1} md={2} className="g-3">
            <Col
              className="d-flex align-items-center"
              style={{
                fontSize: "var(--font-size-lg)",
                fontWeight: "var(--font-weight-regular)",
                color: "var(--color-accent)",
              }}
            >
              <FaCheck className="text-success me-2" /> Migraines
            </Col>
            <Col
              className="d-flex align-items-center"
              style={{
                fontSize: "var(--font-size-lg)",
                fontWeight: "var(--font-weight-regular)",
                color: "var(--color-accent)",
              }}
            >
              <FaCheck className="text-success me-2" /> Tension-type headaches
            </Col>
            <Col
              className="d-flex align-items-center"
              style={{
                fontSize: "var(--font-size-lg)",
                fontWeight: "var(--font-weight-regular)",
                color: "var(--color-accent)",
              }}
            >
              <FaCheck className="text-success me-2" /> Cluster headaches
            </Col>
            <Col
              className="d-flex align-items-center"
              style={{
                fontSize: "var(--font-size-lg)",
                fontWeight: "var(--font-weight-regular)",
                color: "var(--color-accent)",
              }}
            >
              <FaCheck className="text-success me-2" /> Cervicogenic
              (neck-related) headaches
            </Col>
          </Row>
          <p
            className="mt-3"
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            Many of these are closely linked to neck stiffness, muscle tension,
            and postural strain — all of which respond positively to targeted
            physiotherapy.
          </p>
        </Card>

        <Card
          className="p-4 mb-5 shadow-sm border-0"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <h2
            className="mb-4 ps-3"
            style={{
              borderLeft: "6px solid var(--color-primary-dark)",
              paddingLeft: "1rem",
              color: "var(--color-primary-dark)",
            }}
          >
            Common Conditions We Treat
          </h2>
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card
                className="h-100 p-3 shadow-sm"
                style={{ borderLeft: "6px solid var(--color-primary-dark)" }}
              >
                <h3
                  className="mb-3"
                  style={{
                    color: "var(--color-primary-dark)",
                    fontWeight: "var(--font-weight-bold)",
                  }}
                >
                  Cervical Radiculopathy
                </h3>
                <p
                  style={{
                    color: "var(--color-accent)",
                    fontSize: "var(--font-size-mlg)",
                    fontWeight: "var(--font-weight-regular)",
                  }}
                >
                  Cervical radiculopathy occurs when a nerve exiting the
                  cervical spine becomes compressed or irritated, leading to
                  neck, shoulder, or arm pain; numbness; weakness; or changes in
                  sensation. Causes may include disc bulges, osteophytes,
                  inflammation, or degenerative changes.
                </p>

                <p
                  style={{
                    color: "var(--color-accent)",
                    fontSize: "var(--font-size-mlg)",
                    fontWeight: "var(--font-weight-regular)",
                  }}
                >
                  We focus on relieving pressure on the nerve, restoring
                  comfortable movement, and empowering you with strategies to
                  prevent recurrence.
                </p>
              </Card>
            </Col>
            <Col>
              <Card
                className="h-100 p-3 shadow-sm"
                style={{ borderLeft: "6px solid var(--color-primary-dark)" }}
              >
                <h3
                  className="mb-3"
                  style={{
                    color: "var(--color-primary-dark)",
                    fontWeight: "var(--font-weight-bold)",
                  }}
                >
                  Thoracic Outlet Syndrome
                </h3>
                <p
                  style={{
                    color: "var(--color-accent)",
                    fontSize: "var(--font-size-mlg)",
                    fontWeight: "var(--font-weight-regular)",
                  }}
                >
                  The thoracic outlet is a passageway where nerves and blood
                  vessels travel from the spine into the arm. Postural changes,
                  muscle tightness, injury, or structural variations can
                  compress these tissues, causing tingling, heaviness, weakness,
                  or pain.
                </p>

                <p
                  style={{
                    color: "var(--color-accent)",
                    fontSize: "var(--font-size-mlg)",
                    fontWeight: "var(--font-weight-regular)",
                  }}
                >
                  Treatment targets both the structural contributors and your
                  movement patterns, supporting improved function and reduced
                  symptoms.
                </p>
              </Card>
            </Col>
            <Col>
              <Card
                className="h-100 p-3 shadow-sm"
                style={{ borderLeft: "6px solid var(--color-primary-dark)" }}
              >
                <h3
                  className="mb-3"
                  style={{
                    color: "var(--color-primary-dark)",
                    fontWeight: "var(--font-weight-bold)",
                  }}
                >
                  Acute Wry Neck
                </h3>
                <p
                  style={{
                    color: "var(--color-accent)",
                    fontSize: "var(--font-size-mlg)",
                    fontWeight: "var(--font-weight-regular)",
                  }}
                >
                  Wry neck appears suddenly, causing sharp pain, stiffness, and
                  muscle spasm that limits movement. Although distressing, it
                  responds very well to early physiotherapy.
                </p>

                <p
                  style={{
                    color: "var(--color-accent)",
                    fontSize: "var(--font-size-mlg)",
                    fontWeight: "var(--font-weight-regular)",
                  }}
                >
                  We restore mobility, reduce guarding, and guide you through
                  gentle exercises to support a quick, safe recovery.
                </p>
              </Card>
            </Col>
          </Row>
        </Card>

        <Card
          className="p-4 mb-5 shadow-sm border-0"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <h2
            className="mb-4 ps-3"
            style={{
              borderLeft: "6px solid var(--color-primary-dark)",
              paddingLeft: "1rem",
              color: "var(--color-primary-dark)",
            }}
          >
            How Muscle Imbalances Affect Your Neck & Headaches
          </h2>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            Not all neck pain or headaches come from injury. Many cases develop
            from ongoing muscle imbalances related to posture, stress, screen
            use, or repetitive movements.
          </p>
          <Row xs={1} md={2} className="g-3">
            <Col
              className="d-flex align-items-center"
              style={{
                fontSize: "var(--font-size-lg)",
                fontWeight: "var(--font-weight-regular)",
                color: "var(--color-accent)",
              }}
            >
              <FaCheck className="text-success me-2" /> Neck and shoulder strain
            </Col>
            <Col
              className="d-flex align-items-center"
              style={{
                fontSize: "var(--font-size-lg)",
                fontWeight: "var(--font-weight-regular)",
                color: "var(--color-accent)",
              }}
            >
              <FaCheck className="text-success me-2" /> Tension headaches
            </Col>
            <Col
              className="d-flex align-items-center"
              style={{
                fontSize: "var(--font-size-lg)",
                fontWeight: "var(--font-weight-regular)",
                color: "var(--color-accent)",
              }}
            >
              <FaCheck className="text-success me-2" /> Reduced neck mobility
            </Col>
            <Col
              className="d-flex align-items-center"
              style={{
                fontSize: "var(--font-size-lg)",
                fontWeight: "var(--font-weight-regular)",
                color: "var(--color-accent)",
              }}
            >
              <FaCheck className="text-success me-2" /> Upper back fatigue or
              stiffness
            </Col>
            <Col
              className="d-flex align-items-center"
              style={{
                fontSize: "var(--font-size-lg)",
                fontWeight: "var(--font-weight-regular)",
                color: "var(--color-accent)",
              }}
            >
              <FaCheck className="text-success me-2" /> Difficulty maintaining
              posture
            </Col>
          </Row>
          <p
            className="mt-3"
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            During your assessment, we identify these patterns and tailor your
            treatment to correct the root cause — not just the symptoms. During
            your initial consultation, we thoroughly assess the factors
            contributing to both your neck pain and headaches. We provide clear
            explanations and begin hands-on treatment from your first session.
          </p>

          <p
            className="mt-3"
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            We believe recovery is most effective when it’s structured,
            personalised, and guided by a clinician who understands your goals
            and values your whole-person experience. Exercises can play a
            powerful role, but they should always be completed as part of a
            professionally curated plan to ensure safety and meaningful
            progress.
          </p>

          <p
            className="mt-3"
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            Our aim is to empower you — helping you understand your condition,
            feel confident in your plan, and move toward a life with less pain
            and more ease. You’ll leave with a personalised plan designed to
            help you heal, strengthen, move, and thrive.
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
