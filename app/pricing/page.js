"use client";

export const dynamic = "force-static";
import { useEffect } from "react";
import { Container, Table, Card, Button } from "react-bootstrap";

export default function PricingMenu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Shared style for all body/table text
  const textStyle = {
    color: "var(--color-accent)",
    fontSize: "var(--font-size-mlg)",
    fontWeight: "var(--font-weight-regular)",
    verticalAlign: "middle",
  };

  // Shared style for section headings
  const headingStyle = {
    color: "var(--color-primary-dark)",
    fontWeight: "var(--font-weight-bold)",
  };

  return (
    <div style={{ backgroundColor: "#ffff", paddingBottom: "100px" }}>
      <Container className="my-5">
        <h1
          style={{
            fontSize: "3.2rem",
            fontWeight: "bold",
            color: "var(--color-primary-dark)",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Physiotherapy
        </h1>

        {/* --- Referrals Section --- */}
        <Card
          className="p-4 shadow-sm mb-5"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <h2 style={headingStyle}>Referrals</h2>
          <p style={textStyle}>
            You do not need a referral to see a physiotherapist and can book an
            appointment directly. However, if you have a referral from your GP,
            obstetrician, gynecologist, orthopedic neurosurgeon or other specialist, please bring it
            with you.
          </p>

          <p style={textStyle}>
            We accept GP Management Plan Medicare referrals. However, talk to your GP
            to see if this may be applicable for you. Full payment as
            detailed above is required on the day of your appointment, and you
            will receive your Medicare rebate of $61.80 per appointment.
          </p>

          <p style={textStyle}>
            We welcome NDIS participants seeking physiotherapy support to improve mobility, manage pain, increase strength,
            and enhance independence in everyday activities.
          </p>
          <p style={textStyle}>
            Our physiotherapy services are available to participants whose NDIS plans are self-managed or plan-managed. 
          </p>

          <p style={textStyle}>
            We provide individualised physiotherapy care tailored to your goals, which may include:          
          </p>

          <ul style={textStyle}>
            <li>Pain management and movement rehabilitation</li>
            <li>Strength and mobility programs</li>
            <li>Balance and falls prevention</li>
            <li>Functional exercise programs</li>
            <li>Support for long-term physical conditions</li>
          </ul>

          <p style={textStyle}>
            If you are an NDIS participant with self-managed or plan-managed funding, you are welcome to access physiotherapy services with us.        
          </p>

          <h2 style={headingStyle}>Cancellation Policy</h2>
          <p style={textStyle}>
            If you are unsure about your eligibility or how to use your plan for physiotherapy, please feel free to contact us and we will be happy to guide you.
          </p>
          <p style={textStyle}>
            <strong>
              For reschedules within 24 hours, unenabled to fill the sport or no-shows, the full price of
              your appointment will be charged.
            </strong>
          </p>
          <p style={textStyle}>
            We understand that life can get busy so you will receive an SMS reminder 3 days before your appointment. As
            a small independent business, we appreciate your understanding and
            respect of this policy and our clinician’s time.
          </p>
        </Card>

        {/* --- What to Expect Section --- */}
        <Card
          className="p-4 shadow-sm mb-5"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <h2 style={headingStyle}>
            What to Expect with Your Initial Consultation
          </h2>
          <ul style={textStyle}>
            <li>You will be sent a questionnaire to complete regarding your condition.</li>
            <li>In-depth discussion with the physiotherapist to understand your story.</li>
            <li>Comprehensive physical examination to determine the cause of your problem.</li>
            <li>Discussion of findings, diagnosis, and treatment plan.</li>
            <li>Treatment begins during this initial consultation.</li>
          </ul>
        </Card>

        {/* --- Pricing Table --- */}
        <Card
          className="p-3 shadow-sm mb-5"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <Table striped bordered hover responsive className="mb-0">
            <thead>
              <tr style={{ color: "var(--color-primary-dark)" }}>
                <th>Service</th>
                <th>Duration</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={textStyle}>Initial Consultation</td>
                <td style={textStyle}>40 mins</td>
                <td style={textStyle}>$140</td>
              </tr>
              <tr>
                <td style={textStyle}>Initial Women’s Health</td>
                <td style={textStyle}>60 mins</td>
                <td style={textStyle}>$180</td>
              </tr>
              <tr>
                <td style={textStyle}>Extended Subsequent Consultation / Complex</td>
                <td style={textStyle}>60 mins</td>
                <td style={textStyle}>$180</td>
              </tr>
              <tr>
                <td style={textStyle}>Initial Lactating / Mastitis Consultation</td>
                <td style={textStyle}>40 mins</td>
                <td style={textStyle}>$140</td>
              </tr>
              <tr>
                <td style={textStyle}>Subsequent Standard Consultation</td>
                <td style={textStyle}>30 mins</td>
                <td style={textStyle}>$109</td>
              </tr>
              <tr>
                <td style={textStyle}>Subsequent Women’s Health Consultation</td>
                <td style={textStyle}>30 mins</td>
                <td style={textStyle}>$109</td>
              </tr>
              <tr>
                <td style={textStyle}>Short Subsequent Consultation</td>
                <td style={textStyle}>20 mins</td>
                <td style={textStyle}>$99</td>
              </tr>
            </tbody>
          </Table>
        </Card>

        {/* --- Floating Action Button --- */}
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