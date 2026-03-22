"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import HeadAche from "../../public/headache-i.png";
import DryNeedling from "../../public/dn-i.png";
import TMJ from "../../public/tmj-i.png";
import PM from "../../public/pm-i.png";
import Laser from "../../public/laser-i.png";
import After from "../../public/after-i2.png";
import Womens from "../../public/womens-i.png";
import Balance from "../../public/balance-i.png";
import BackPain from "../../public/back-pain-i.png";


import styles from "./Services.module.css";

// Helper to truncate text
const truncateText = (text, maxLength = 150) =>
  text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

export default function Services() {
  
  const serviceData = [
    {
      id: 1,
      slug: "headache-neck-pain",
      title: "Headache & Neck Pain",
      description:
        "Neck pain can affect daily life, concentration, sleep, and work. Our approach focuses on identifying the cause and providing compassionate, personalised care.",
      icon: <Image src={HeadAche} width={95} height={95} alt="Headache icon" />,
    },
    {
      id: 2,
      slug: "tmj-dysfunction",
      title: "TMJ Dysfunction",
      description:
        "Commonly known as jaw pain — involves conditions that cause discomfort, tension, or restricted movement in the jaw and surrounding areas. These symptoms can interfere with speaking, eating, sleeping, and daily activities.",
      icon: <Image src={TMJ} width={95} height={95} alt="TMJ icon" />,
    },
    {
      id: 3,
      slug: "pre-post-surgery",
      title: "Pre & Post-Surgery Physiotherapy",
      description:
        "Preparing before surgery and structured rehabilitation afterward can improve recovery, strength, and long-term outcomes.",
      icon: <Image src={After} width={95} height={95} alt="Surgery icon" />,
    },
    {
      id: 4,
      slug: "pain-management",
      title: "Pain Management",
      description:
        "Pain can deeply affect physical comfort, emotional wellbeing, relationships, and daily life. Whether caused by injury, a medical condition, nerve irritation, arthritis, or everyday wear and tear, specialized care can help you manage and improve your quality of life.",
      icon: <Image src={PM} width={95} height={95} alt="Pain management icon" />,
    },
    {
      id: 5,
      slug: "mastitis-womens-health",
      title: "Women’s Health Physiotherapy",
      description:
        "A woman’s body undergoes remarkable changes throughout life — from puberty and pregnancy to postpartum recovery and menopause. Specialized support can improve pelvic floor function, comfort, confidence, and quality of life.",
      icon: <Image src={Womens} width={95} height={95} alt="Women’s health icon" />,
    },
    {
      id: 6,
      slug: "dry-needling",
      title: "Dry Needling",
      description:
        "Dry needling is a modern, evidence-informed technique used to help release muscle tension, reduce pain, and restore healthy movement by inserting fine, sterile needles into areas of muscular tightness or trigger points.",
      icon: <Image src={DryNeedling} width={95} height={95} alt="Dry needling icon" />,
    },
    {
      id: 7,
      slug: "laser",
      title: "Laser",
      description:
        "Low-Level Laser Therapy (LLLT) supports tissue healing, reduces inflammation, and relieves pain in a safe and non-invasive manner.",
      icon: <Image src={Laser} width={95} height={95} alt="Laser therapy icon" />,
    },
    {
      id: 8,
      slug: "balance-training",
      title: "Balance Training",
      description:
        "As we age, changes in muscle strength, balance, and coordination can increase the risk of falls and limit everyday activities.",
      icon: <Image src={Balance} width={95} height={95} alt="Balance training icon" />,
    },
    {
      id: 9,
      slug: "back-pain",
      title: "Back Pain",
      description:
        "Lower back pain is one of the most common musculoskeletal conditions and can affect daily activities such as sitting, walking, and working.",
      icon: <Image src={BackPain} width={95} height={95} alt="Back pain icon" />,
    },
  ];

  return (
    <section className={styles.servicesPageContainer}>
      <div className={styles.servicesHeader}>
        <h1 className={styles.sectionTitle}>Our Core Services</h1>
        <p className={styles.sectionIntro}>
          We provide comprehensive physiotherapy care to support movement, comfort, confidence, and wellbeing at every stage of life.
          Whether you’re managing pain and injury, recovering from surgery, navigating pregnancy or postpartum changes, or experiencing pelvic health concerns, our goal is to help you heal, strengthen, move, and thrive.
        </p>
      </div>

      <div className={styles.servicesGrid}>
        {serviceData.map((service) => (
          <div key={service.id} className={styles.serviceCard}>
            <div className={styles.cardIconWrapper}>{service.icon}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>
              {truncateText(service.description)}
            </p>
            <Link href={`/services/${service.slug}`} className={styles.learnMoreLink}>
              Learn more →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}