"use client";
export const dynamic = "force-static";
import React, { useEffect } from "react";
import Image from "next/image";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AboutImage from "../../public/aboutimg.jpg"; // Replace with your professional image

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: "#ffff", paddingBottom: "100px" }}>
      <Container className="my-5">
        <h1
          style={{
            fontSize: "3.2rem", // Standard size for your section titles
            fontWeight: "bold",
            color: "var(--color-primary-dark)",
            marginBottom: "2rem",
            textAlign: "center", // Services title is usually left-aligned by default
          }}
        >
          Our Philosophy
        </h1>
        <Card
          className="p-4 shadow-sm mb-5"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <h2
            className="border-start border-3 ps-3"
            style={{
              color: "var(--color-primary-dark)",
              fontWeight: "var(--font-weight-bold)",
            }}
          >
            At Physio Without Border
          </h2>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-mlg)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            Our philosophy is rooted in compassion, expertise, and a deep
            respect for every individual’s journey.
            <br />
            We believe that physiotherapy is more than treatment — it is a
            partnership that empowers people to heal, strengthen, move, and
            thrive with confidence.
          </p>
        </Card>
        <Card
          className="p-4 shadow-sm mb-5"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <h2
            className="border-start border-3 ps-3"
            style={{
              color: "var(--color-primary-dark)",
              fontWeight: "var(--font-weight-bold)",
            }}
          >
            Holistic & Evidence-Based Treatment
          </h2>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-mlg)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            We honour the whole person while upholding the highest standards of
            clinical excellence.
            <br />
            Our approach blends science-driven physiotherapy with an
            understanding of each individual’s lifestyle, goals, and lived
            experiences. By combining evidence-based practice with holistic
            care, we look beyond symptoms to support lasting recovery, improved
            movement, and long-term wellbeing.
          </p>
        </Card>
        <Card
          className="p-4 shadow-sm mb-5"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <h2
            className="border-start border-3 ps-3"
            style={{
              color: "var(--color-primary-dark)",
              fontWeight: "var(--font-weight-bold)",
            }}
          >
            Patient-Centred Partnership
          </h2>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-mlg)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            Your story guides everything we do.
            <br />
            We collaborate closely with you, ensuring your goals shape the
            treatment plan and your comfort sets the pace. Through compassionate
            communication, inclusivity, and genuine connection, we create a safe
            space where you feel heard, respected, and empowered throughout your
            healing journey.
          </p>
        </Card>
        <Card
          className="p-4 shadow-sm mb-5"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <h2
            className="border-start border-3 ps-3"
            style={{
              color: "var(--color-primary-dark)",
              fontWeight: "var(--font-weight-bold)",
            }}
          >
            Innovation
          </h2>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-mlg)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            We embrace growth, curiosity, and continuous learning.
            <br />
            From evolving clinical techniques to emerging technologies, we
            actively seek out approaches that enhance outcomes and elevate the
            care we provide.
          </p>
        </Card>
        <Card
          className="p-4 shadow-sm mb-5"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <h2
            className="border-start border-3 ps-3"
            style={{
              color: "var(--color-primary-dark)",
              fontWeight: "var(--font-weight-bold)",
            }}
          >
            Integrity
          </h2>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-mlg)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            Integrity is the foundation of our work.
            <br />
            We uphold honesty, transparency, and professionalism in every
            interaction. You can trust that our recommendations are always
            guided by your best interests, and that the care you receive is
            grounded in ethics, compassion, and clinical responsibility.
          </p>
        </Card>
      </Container>
      {/* --- NEW WAVE BANNER (Replaced Image Banner) --- */}
      <section
        className="text-center d-flex align-items-center justify-content-center position-relative overflow-hidden"
        style={{
          height: "400px",
          backgroundColor: "#fff",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
          <Image
            src="/layered-waves-haikei5.svg"
            alt="Wave background"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <Container style={{ position: "relative", zIndex: 1 }}>
          <h3 style={{ color: "var(--color-primary-dark)", fontWeight: "bold", letterSpacing: "2px" }}>
            ABOUT ME
          </h3>
          <h1 style={{ color: "var(--color-heading)", fontSize: "3.5rem", fontWeight: "bold" }}>
            Jelene Mae Malang
          </h1>
          <p style={{ color: "var(--color-text-main)", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
            Empowering you to heal, strengthen, and move with confidence.
          </p>
        </Container>
      </section>

      <Container className="my-5">
        <Card
          className="p-4 shadow-sm rounded-4"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <Row className="g-4">
            <Col md={4}>
              <Image
                src={AboutImage}
                alt="About Me"
                className="rounded-4"
                style={{ width: "100%", height: "90%", objectFit: "cover" }}
              />
            </Col>

            <Col md={8}>
              <p
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--font-size-mlg)",
                  fontWeight: "var(--font-weight-regular)",
                }}
              >
                I am dedicated to improving function, reducing pain, and
                enhancing overall quality of life through comprehensive
                musculoskeletal and pelvic health physiotherapy. I’m passionate
                about helping people feel stronger, move with confidence, and
                reconnect with their bodies. My career has taken me through a
                wide range of physiotherapy settings—from acute rehabilitation,
                community/aged-care and neurology to pediatrics, musculoskeletal
                care, and now expanding special interest in women’s and pelvic
                health.
              </p>

              <p
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--font-size-mlg)",
                  fontWeight: "var(--font-weight-regular)",
                }}
              >
                Since graduating in 2011, I’ve worked in private hospitals
                overseas before settling in Launceston in 2017. Here in
                Australia, I’ve continued to refine my MSK skills and develop a
                deep interest in supporting women through all stages of life.
              </p>

              <p
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--font-size-mlg)",
                  fontWeight: "var(--font-weight-regular)",
                }}
              >
                I believe in empowering people with knowledge, support, and
                practical strategies that make a real difference. Every
                treatment plan I create is personalized, realistic, and built
                around the individual—not just their symptoms. My goal is to
                provide care that truly empowers you to heal, strengthen, move,
                and thrive.
              </p>

              <Card
                className="border-start border-3 border-success p-3 my-3"
                style={{ backgroundColor: "var(--color-card)" }}
              >
                <p
                  className="mb-0"
                  style={{
                    color: "var(--color-accent)",
                    fontWeight: "var(--font-weight-bold)",
                  }}
                >
                  <strong>
                    <em>
                      “I do not treat your scan or just your symptoms. I treat
                      you — and how those symptoms affect your life, your
                      relationships, and what is important to you.”
                    </em>
                  </strong>
                </p>
              </Card>

              <p
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--font-size-mlg)",
                  fontWeight: "var(--font-weight-regular)",
                }}
              >
                This reflects my belief that every person’s experience of pain
                and recovery is unique and deserves care that sees the whole
                individual.
              </p>
            </Col>
          </Row>

          <Row className="text-center mt-4 g-4">
            <Col md={3}>
              <Card
                className="p-3 shadow-sm"
                style={{ backgroundColor: "var(--color-card)" }}
              >
                <h3 className="text-success">15+</h3>
                <p style={{ color: "var(--color-accent)" }}>
                  Years of Experience
                </p>
              </Card>
            </Col>
            <Col md={3}>
              <Card
                className="p-3 shadow-sm"
                style={{ backgroundColor: "var(--color-card)" }}
              >
                <h3 className="text-success">12+</h3>
                <p style={{ color: "var(--color-accent)" }}>Musculoskeletal</p>
              </Card>
            </Col>
            <Col md={3}>
              <Card
                className="p-3 shadow-sm"
                style={{ backgroundColor: "var(--color-card)" }}
              >
                <h4 className="text-success">Women & Pelvic Health</h4>
                <p style={{ color: "var(--color-accent)" }}>Special Interest</p>
              </Card>
            </Col>
            <Col md={3}>
              <Card
                className="p-3 shadow-sm"
                style={{ backgroundColor: "var(--color-card)" }}
              >
                <h3 className="text-success">1000+</h3>
                <p style={{ color: "var(--color-accent)" }}>Patients Helped</p>
              </Card>
            </Col>
          </Row>

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
        </Card>
      </Container>
    </div>
  );
}
