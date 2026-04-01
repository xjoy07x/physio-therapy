"use client";
export const dynamic = "force-static";
import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { GiLaserGun } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import laser from "../../../public/laser1.png";

export default function ServiceDetailLaser() {
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
          Low-Level Laser Therapy (LLLT)
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
          <Row className="align-items-center">
            <Col lg={6}>
              <Image
                src={laser}
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
                Low-Level Laser Therapy (LLLT), or cold laser therapy, is a safe
                and non-invasive treatment that supports tissue healing, reduces
                inflammation, and relieves pain. It produces no heat, vibration,
                or sound, making it comfortable for musculoskeletal and
                inflammatory conditions.
              </p>
              <p
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--font-size-lg)",
                  fontWeight: "var(--font-weight-regular)",
                }}
              >
                LLLT uses specific wavelengths of light that interact with your
                cells to stimulate repair, calm irritated tissue, and support
                your body’s natural healing processes. This cellular interaction
                — known as photobiomodulation — can help accelerate recovery and
                enhance the effectiveness of your physiotherapy treatment.
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
            How Laser Therapy Works
          </h2>

          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            The light used in LLLT is highly focused and capable of reaching
            both superficial and deeper tissues depending on its wavelength.
            Wavelengths between 660 nm and 905 nm have been shown to:
          </p>

          <Row xs={1} md={2} className="g-3">
            {[
              "Reduce inflammation",
              "Ease pain",
              "Support tissue repair",
              "Improve local circulation",
            ].map((item, index) => (
              <Col
                key={index}
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
            className="mb-4 border-start border-3 ps-3"
            style={{
              borderColor: "var(--color-primary-dark)",
              color: "var(--color-primary-dark)",
            }}
          >
            Benefits of Low-Level Laser Therapy
          </h2>

          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            LLLT may be used alone or alongside other physiotherapy techniques
            to support recovery. Clinically supported benefits include:
          </p>

          <Row xs={1} md={3} className="g-4">
            {[
              {
                title: "Reduced Inflammation",
                text:
                  "Often felt within hours to days as the treatment calms irritated tissues.",
              },
              {
                title: "Pain Relief",
                text:
                  "By modulating nerve activity and reducing inflammatory chemicals.  ",
              },
              {
                title: "Accelerated Tissue Repair",
                text: (
                  <>
                    <p>LLLT stimulates cellular repair by activating:</p>
                    <p>fibroblasts (connective tissue healing)</p>
                    <p>keratinocytes (skin repair)</p>
                    <p>endothelial cells (blood vessel health)</p>
                    <p>lymphocytes (immune response)</p>
                    <p>
                      This makes it particularly helpful for slow-healing
                      injuries, postoperative recovery, and inflammatory
                      conditions.
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
            How We Use Laser Therapy in Physiotherapy
          </h2>

          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-regular)",
              marginBottom: "8px",
            }}
          >
            Laser therapy is often used to enhance your physiotherapy treatment
            plan. It may be incorporated alongside:
          </p>

          <ul
            className="service-list"
            style={{
              fontSize: "var(--font-size-lg)",
              color: "var(--color-accent)",
            }}
          >
            <li>manual therapy</li>
            <li>therapeutic exercise</li>
            <li>dry needling</li>
            <li>swelling and inflammation management</li>
            <li>movement retraining</li>
          </ul>

          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-regular)",
              marginTop: "8px",
            }}
          >
            Our goal is always to support healing from the inside out, reduce
            discomfort, and help you move more comfortably and confidently.
          </p>

          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
              fontWeight: "var(--font-weight-regular)",
            }}
          >
            Laser therapy is gentle, safe, and fast — making it an excellent
            option for patients seeking relief from pain or inflammation while
            supporting long-term recovery.
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
            Conditions Treated
          </h2>

          <Row xs={1} md={2} className="g-3">
            {[
              "Osteoarthritis of the knee, hip, and ankle",
              "Rheumatoid arthritis",
              "TMD",
              "Shoulder impingement syndromes",
              "Hip or shoulder bursitis",
              "Low back disc degeneration / Disc herniation / Sciatica / Neuropathic pain",
              "Tendonitis / Tennis elbow / Plantar fasciitis",
              "Reduction of volume and pain in lymphedema",
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