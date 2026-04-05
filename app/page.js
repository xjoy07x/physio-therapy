"use client";

import Image from "next/image";
import { Carousel, Button, Container, Row, Col } from "react-bootstrap";
import styles from "./components/Hero.module.css";
import Services from "./services/page";

export default function Hero() {
  const images = ["/hero_img1.png", "/hero_img2.png", "/hero_img3.png"];

  return (
    <>
      {/* Hero Section */}
      <section
        className="position-relative d-flex align-items-center"
        style={{ minHeight: "100vh", backgroundColor: "#fff" }}
      >
        {/* Wave background */}
        <div
          style={{
            position: "absolute",
            top: -20,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
            overflow: "hidden",
          }}
        >
          <Image
            src="/layered-waves-haikei5.svg"
            alt="Wave background"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Hero Content */}
        <Container style={{ position: "relative", zIndex: 1 }} className="py-5">
          <Row className="align-items-center">
            {/* Left Column */}
            <Col lg={6} className="mb-4 mb-lg-0 text-center text-lg-start">
              <h2
                className="text-uppercase fw-bold mb-3"
                style={{
                  opacity: 0.9,
                  letterSpacing: "0.6px",
                  color: "var(--color-text-main)",
                }}
              >
                CARE THAT EMPOWERS YOU
              </h2>

              <h1
                className="display-4 fw-bold mb-4"
                style={{ color: "var(--color-heading)", lineHeight: 1.15 }}
              >
                Heal. Strengthen.
                <br />
                Move. Thrive
              </h1>

              <p
                className="mb-4"
                style={{
                  fontSize: "var(--font-size-lg)",
                  maxWidth: "650px",
                  lineHeight: 1.6,
                  color: "var(--color-text-main)",
                }}
              >
                Evidenced-based and personalized physiotherapy to reduce
                pain, restore your strength, and improve your quality of life.
              </p>

              <Button
                href="/book"
                className={`${styles.bookButton} text-white`}
              >
                Book Your Appointment Now
              </Button>
            </Col>

            {/* Right Column */}
            <Col lg={6}>
              <Carousel indicators={false} fade>
                {images.map((src, idx) => (
                  <Carousel.Item key={idx}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "400px",
                      }}
                    >
                      <Image
                        src={src}
                        alt={`Hero image ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{
                          objectFit: "cover",
                          objectPosition: "top center",
                          borderRadius: "12px",
                          border: "3px solid rgba(0, 0, 0, 0.08)",
                        }}
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          minHeight: "30vh",
          backgroundColor: "var(--color-bg)",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Container>
          <Row className="g-4">
            {[
              "Holistic",
              "Evidence-Based Treatment",
              "Patient-Centred",
              "Innovation",
              "Integrity",
            ].map((text, i) => (
              <Col key={i}>
                <h2 style={{ color: "var(--color-primary-dark)" }}>{text}</h2>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Services */}
      <section id="services" style={{ scrollMarginTop: "35px" }}>
        <Services />
      </section>
    </>
  );
}
