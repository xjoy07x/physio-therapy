"use client";
export const dynamic = "force-static";
import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  GiMuscleUp,
  GiBrain,
  GiHeartInside,
  GiBodyBalance,
} from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import dryneedling from "../../../public/dryneedling1.png";

export default function ServiceDetailDN() {
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
          Dry Needling
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
                src={dryneedling}
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
                Dry needling is a modern, evidence-informed technique used to
                help release muscle tension, reduce pain, and restore healthy
                movement.
              </p>
              <p
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--font-size-lg)",
                  fontWeight: "var(--font-weight-regular)",
                }}
              >
                It involves inserting very fine, sterile needles into areas of
                muscular tightness or trigger points, sometimes producing a brief
                involuntary “twitch response.”
              </p>
              <p
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--font-size-lg)",
                  fontWeight: "var(--font-weight-regular)",
                }}
              >
                Although inspired by the history of acupuncture, dry needling is
                grounded in Western medical principles.
              </p>
              <p
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--font-size-lg)",
                  fontWeight: "var(--font-weight-regular)",
                }}
              >
                Rather than focusing on energy pathways, it targets muscles,
                nerves, and connective tissue to calm irritation and support
                natural healing.
              </p>
              <p
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--font-size-lg)",
                  fontWeight: "var(--font-weight-regular)",
                }}
              >
                Dry needling is often combined with manual therapy, movement
                retraining, strengthening, and education to support longer-lasting
                recovery.
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
            Why Dry Needling Helps
          </h2>

          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-regular)",
              marginBottom: "8px",
            }}
          >
            Research shows that dry needling can immediately increase range of
            motion, reduce muscle tone, raise pressure pain thresholds, and
            decrease pain in people with musculoskeletal conditions.
          </p>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-regular)",
              marginBottom: "8px",
            }}
          >
            These benefits arise through several key mechanisms.
          </p>

          <Row xs={1} md={2} className="g-4 mb-4">
            {[
              {
                title: "Local Twitch Response",
                text: (
                  <>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      A needle inserted into a trigger point may produce a brief,
                      involuntary contraction known as a <em>local twitch response</em>.
                    </p>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      This reflex helps to release tension within muscle fibres.
                    </p>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      It decreases sensitivity at the trigger point.
                    </p>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      It stimulates mechanoreceptors (such as A-beta fibres) that
                      help modulate pain.
                    </p>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      This response allows the muscle to reset, soften, and begin
                      functioning more normally.
                    </p>
                  </>
                ),
              },
              {
                title: "Improved Blood Flow",
                text: (
                  <>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      Trigger points often restrict blood flow, creating local
                      tightness, ischemia, and reduced oxygen levels.
                    </p>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      Dry needling encourages vasodilation—the widening of tiny
                      blood vessels.
                    </p>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      This leads to increased circulation.
                    </p>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      Improved oxygen delivery.
                    </p>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      Reduced inflammatory chemicals.
                    </p>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      Enhanced tissue healing.
                    </p>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      This supports faster recovery and helps reduce muscle tightness.
                    </p>
                  </>
                ),
              },
              {
                title: "Neurophysiological Effects",
                text: (
                  <>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      Dry needling affects both local tissues and the nervous system.
                    </p>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      By stimulating sensory and motor pathways, it helps regulate
                      how the brain perceives pain and encourages balance within
                      the nervous system.
                    </p>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      This can reduce peripheral sensitisation (increased sensitivity
                      at the tissue level).
                    </p>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      It can also reduce central sensitisation (heightened pain processing
                      within the nervous system).
                    </p>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      Together, these effects help calm irritation and restore
                      healthier pain responses.
                    </p>
                  </>
                ),
              },
              {
                title: "Remote & Systemic Effects",
                text: (
                  <>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      Dry needling can sometimes provide relief beyond the exact
                      site being treated.
                    </p>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      Stimulating a trigger point in one region may create analgesic
                      effects in nearby or functionally related muscles.
                    </p>
                    <p style={{ fontSize: "var(--font-size-mlg)" }}>
                      Although research varies on the extent of these effects, they
                      may support broader movement patterns and enhance overall
                      rehabilitation.
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
            Who May Benefit From Dry Needling?
          </h2>

          <p
            style={{
              fontSize: "var(--font-size-lg)",
              color: "var(--color-accent)",
            }}
          >
            Dry needling can support recovery for individuals experiencing:
          </p>

          <Row xs={1} md={2} className="g-3">
            {[
              "Neck or back pain",
              "Headaches or jaw tension",
              "Shoulder, hip, or limb tightness",
              "Postural discomfort",
              "Overuse or sports injuries",
              "Post-surgical muscular guarding",
              "Chronic musculoskeletal pain",
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
                <span style={{ color: "var(--color-accent)" }}>{item}.</span>
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
            It is one of many tools we may use to help you heal, strengthen,
            move, and thrive.
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

        <Card
          className="p-4 mb-5 shadow-sm border-0 rounded-4"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <h4 className="mb-2" style={{ color: "var(--color-primary-dark)" }}>
            APA Reference
          </h4>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-mlg)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            <a
              href="https://australian.physio/inmotion/acupuncture-and-dry-needling-musculoskeletal-pain"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--color-primary-dark)" }}
            >
              https://australian.physio/inmotion/acupuncture-and-dry-needling-musculoskeletal-pain
            </a>
          </p>
        </Card>
      </Container>
    </div>
  );
}