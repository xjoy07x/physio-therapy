"use client";
export const dynamic = "force-static";
import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  GiFemale,
  GiBodyBalance,
  GiHeartInside,
  GiBabyBottle,
  GiMuscleUp,
} from "react-icons/gi";
import Image from "next/image";
import pelvicfloor from "../../../public/mastitis1.png";

export default function ServiceDetailsWH() {
   useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top on page load
      }, []);

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <Container className="py-5" style={{ paddingTop: "120px" }}>
        {/* ======= TITLE ======= */}
        <h1
          className="text-center mb-5 fw-bold"
          style={{ color: "var(--color-primary-dark)" }}
        >
          Pelvic Floor Physiotherapy for Women
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

        {/* ======= INTRODUCTION ======= */}
        <Card
          className="mb-5 shadow-sm border-0 p-4 rounded-4"
          style={{ backgroundColor: "var(--color-card)" }}
        >
          <Row className="align-items-center g-4">
            <Col lg={6}>
              <Image
                src={pelvicfloor}
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
                A woman’s body undergoes remarkable changes throughout life —
                from puberty and pregnancy to postpartum recovery and menopause.
                These shifts can influence pelvic floor function, and when
                symptoms arise, specialized support can make a profound
                difference in comfort, confidence, and quality of life.
              </p>
              <p
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--font-size-lg)",
                  fontWeight: "var(--font-weight-regular)",
                }}
              >
                Women’s pelvic health physiotherapists have advanced training in
                assessing and treating pelvic floor concerns and understand how
                physical, hormonal and emotional changes affect wellbeing.
              </p>
              <p
                style={{
                  color: "var(--color-accent)",
                  fontSize: "var(--font-size-lg)",
                  fontWeight: "var(--font-weight-regular)",
                }}
              >
                Pelvic floor physiotherapy provides a safe, supportive and
                evidence-based approach for concerns such as pelvic pain,
                incontinence, prolapse symptoms, pregnancy-related discomfort,
                and postnatal recovery. Through thorough assessment, gentle
                treatment and personalized strategies, we aim to restore
                function, reduce symptoms, and empower you to feel more at ease
                in your body.
              </p>
            </Col>
          </Row>
        </Card>

        {/* ======= COMMON FEMALE CONTINENCE PROBLEMS ======= */}
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
            Common Female Continence Problems
          </h2>
          <Row xs={1} md={3} className="g-4">
            {[
              {
                title: "Stress Incontinence",
                text: "Leakage of urine when you run, laugh, cough or sneeze",
              },
              {
                title: "Urge Incontinence",
                text: "Leakage when you have a strong and sudden urge to go to the toilet, but don’t make it in time",
              },
              {
                title: "Bowel Dysfunction",
                text: "Problems with constipation or control of wind or faeces",
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

        {/* ======= WOMEN’S PELVIC FLOOR PROBLEMS AS CARDS ======= */}
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
            Women’s Pelvic Floor Problems
          </h2>
          <Row xs={1} md={2} className="g-4">
            {[
              {
                title: "Prolapse of pelvic organs",
                text: "Including bladder, bowel or uterus",
              },
              {
                title: "Pain in the pelvic, abdominal or vulva region",
                text: "",
              },
              {
                title: "Pain with sexual intercourse",
                text: "",
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
                  {item.text && (
                    <p
                      style={{
                        color: "var(--color-accent)",
                        fontSize: "var(--font-size-mlg)",
                        fontWeight: "var(--font-weight-regular)",
                      }}
                    >
                      {item.text}
                    </p>
                  )}
                </Card>
              </Col>
            ))}
          </Row>
        </Card>

        {/* ======= PREGNANCY RELATED PELVIC FLOOR PROBLEMS ======= */}
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
            Pregnancy Related Pelvic Floor Problems
          </h2>
          <Row xs={1} md={2} className="g-4">
            {[
              {
                title: "Antenatal Conditions",
                text: "Pelvic girdle and low back pain",
              },
              {
                title: "Postnatal Conditions",
                text: "Pelvic floor weakness, neck, back or perineal pain",
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

        {/* ======= MASTITIS / BREASTFEEDING CARDS ======= */}
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
            Mastitis, Blocked Ducts, Engorgement & Crakked Nipples
          </h2>

          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-mlg)",
            }}
          >
            Breastfeeding can be a rewarding and deeply meaningful experience,
            but it doesn’t always come without challenges. Mastitis, blocked
            ducts and breast engorgement are common conditions that can make
            feeding painful, stressful and overwhelming — sometimes causing
            mothers to stop breastfeeding earlier than planned. With the right
            support and timely treatment, these issues can often be resolved
            quickly and effectively.
          </p>

          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-mlg)",
            }}
          >
            Our Women’s Health Physiotherapists are specially trained in
            therapeutic ultrasound and lactation-related physiotherapyto help
            relieve pain, reduce inflammation and restore comfortable feeding.
          </p>

          <Row xs={1} md={2} className="g-4 mt-3">
            {[
              {
                title: "Mastitis",
                text: `Mastitis is an inflammatory condition of the breast tissue and milk ducts. It occurs when pressure builds up inside the milk ducts — often due to incomplete drainage — causing milk to flow backwards into the surrounding breast tissue. Signs include pain, swelling, redness, sore nipples, fever, and fatigue.`,
              },
              {
                title: "Blocked Ducts & Engorgement",
                text: `Milk ducts may become blocked when milk does not drain effectively, leading to tenderness or lumps. Engorgement occurs when the breasts become overly full, causing swelling, warmth, firmness or pain.`,
              },
              {
                title: "Crakked Nipples",
                text: `Often caused by incorrect positioning or attachment of the baby. Breastfeeding with cracked nipples can be very painful and may lead to bleeding.`,
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

        {/* ======= WHAT CAN YOU DO AT HOME CARD ======= */}
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
            }}
          >
            Physiotherapy provides safe, evidence-based treatments that
            effectively reduce pain, inflammation and swelling, while improving
            milk flow. Your care may include:
          </p>

          <h4
            style={{
              color: "var(--color-primary-dark)",
            }}
          >
            Therapeutic Ultrasound
          </h4>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            A key treatment for mastitis and blocked ducts.
          </p>
          <ul
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            <li>Uses gentle sound waves to create micro-massage and heat </li>
            <li>Reduces inflammation, swelling and pain </li>
            <li>Helps loosen thickened milk and open blocked ducts </li>
            <li>
              Improves circulation to support tissue healing and milk drainage
            </li>
          </ul>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            Many women experience relief after just one session; 1–3 sessions
            are typically recommended.
          </p>

          <h4
            style={{
              color: "var(--color-primary-dark)",
            }}
          >
            Low level Laser Therapy
          </h4>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            Peak benefit is usually felt 24 hours after treatment. Effective
            treatment for craked nipples.
          </p>

          <ul
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            <li>Use light energy to stimulate cellular repair </li>
            <li>Reduces inflammation and pain </li>
            <li>Particularly helpful for nipple trauma </li>
            <li>Painless and safe during breastfeeding</li>
          </ul>

          <h4
            style={{
              color: "var(--color-primary-dark)",
            }}
          >
            Gentle Lymphatic & Breast Massage
          </h4>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            These techniques are safe, gentle and easy to use at home. We teach
            featherlight massage techniques to:
          </p>

          <ul
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            <li>Support lymphatic drainage </li>
            <li>Reduce swelling </li>
            <li>Encourage natural milk flow </li>
            <li>Ease discomfort </li>
          </ul>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            We work collaboratively with your lactation consultant and GP to
            ensure complete, coordinated care.
          </p>
        </Card>

        {/* ======= HOW PHYSIOTHERAPY HELPS SEPARATE CARD ======= */}
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
            What You Can Do At Home
          </h2>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            If mastitis is suspected, early self-care can help:
          </p>

          <ul
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            <li>Feed on demand if comfortable </li>
            <li>Offer the affected breast first to encourage drainage </li>
            <li>Re-latch your baby if feeding becomes painful </li>
            <li>Apply gentle warmth before feeding</li>
            <li>Apply cold packs after feeding to reduce swelling </li>
            <li>Use featherlight massage toward the armpit </li>
            <li>Rest as much as possible for 4–5 days </li>
            <li>Avoid tight bras, tops or underwire </li>
          </ul>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            If symptoms worsen or fail to improve within 24 hours, seek
            physiotherapy or medical support promptly.
          </p>
        </Card>

        {/* ======= FAQ CARD ======= */}
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
            Frequently Asked Questions
          </h2>
          <h4
            style={{
              color: "var(--color-primary-dark)",
            }}
          >
            Can I still feed from the affected breast?
          </h4>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            Yes — breastfeeding is generally safe and helpful, as long as it is
            not excessively painful. Many mothers find feeding becomes more
            comfortable after ultrasound treatment.
          </p>
          <h4
            style={{
              color: "var(--color-primary-dark)",
            }}
          >
            Should I express between feeds?
          </h4>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            Extra expressing is not always recommended. If you do express, keep
            it gentle and stop as soon as pressure eases.
          </p>
          <h4
            style={{
              color: "var(--color-primary-dark)",
            }}
          >
            Can I bring my baby with me to my laser or ultrasound appointment?
          </h4>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            We understand that often you will need to bring your baby along,
            especially if they may be due a feed before or after your
            appointment, and this is absolutely fine.
          </p>

          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            Please note, however, that for Laser treatment, due to laser safety
            protocols, the patient and the therapist wear safety glasses and
            everyone else (including babies) need to stay outside the room.
            Please consider bringing a friend or family member to stay with the
            baby in the waiting area.
          </p>

          <h4
            style={{
              color: "var(--color-primary-dark)",
            }}
          >
            How long does a laser or ultrasound appointment take?
          </h4>
          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            The length of the appointment depends on the area of the breast or
            nipple that’s been affected. Small areas of nipple damage may take
            around 10 minutes or less of laser treatment time, while large areas
            affected by mastitis may take closer to 30 minutes.
          </p>

          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            We priorities mastitis and lactation concerns and will work to find
            you an appointment urgently. Please call us and leave a message
            mentioning your breastfeeding concern at 0497902970 or email us at
            _________and we will get back to you shortly.
          </p>

          <p
            style={{
              color: "var(--color-accent)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            If you need assistance after hours, we offer an emergency
            after-hours, home visit and weekend service (please note this has an
            additional 10% surcharge)
          </p>
        </Card>
      </Container>

      {/* ======= BOOKING BUTTON ======= */}
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
