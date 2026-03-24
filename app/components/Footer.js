"use client";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import styles from "../components/Footer.module.css"; // import CSS module

export default function Footer() {
  return (
    <footer
      className="text-light"
      style={{ backgroundColor: "var(--color-accent)" }}
    >
      <div className="container py-5">
        <div className="row">
          {/* Brand */}
          <div className="col-lg-6 mb-4">
            <h3>Physio Without Border</h3>
            <p>
              Providing professional physiotherapy services with care,
              compassion, and expertise — wherever you are.
            </p>
            <div className="d-flex gap-2">
              <Link
                href="https://www.facebook.com/profile.php?id=61585598510869"
                target="_blank"
                className={`btn btn-outline-light btn-sm rounded-circle ${styles.footerIcon}`}
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://www.instagram.com/physiowithoutborder?igsh=MWJlMDF0ajRucGNnaQ%3D%3D&utm_source=qr"
                target="_blank"
                className={`btn btn-outline-light btn-sm rounded-circle ${styles.footerIcon}`}
              >
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className={styles.footerLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.footerLink}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className={styles.footerLink}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className={styles.footerLink}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="col-lg-2 mb-4">
            <h5>Location</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Prospect Medical
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Newstead Medical
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  First Point Healthcare
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Beaconsfield Family Medical
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Deloraine Medical
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-2 mb-4">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li className={styles.footerText}>Email: hello@physiowithoutborder.com</li>
              <li className={styles.footerText}>Phone: 0497902970</li>
              <li className={styles.footerText}>Launceston Tasmania Australia</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center py-3 border-top border-light">
        <p className="mb-0">
          © {new Date().getFullYear()} Physio Without Border. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
