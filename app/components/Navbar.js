"use client";

import Link from "next/link";
import Image from "next/image";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function SiteNavbar() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const handleServicesClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      const section = document.getElementById("services");
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      expand="lg"
      className="py-3"
      style={{
        backgroundColor: "var(--color-nav)",
        position: "sticky",
        width: "100%",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container>
        <Image src="/logo.png" width={50} height={50} alt="logo" />

        <Navbar.Brand
          as={Link}
          href="/"
          className="fw-bold"
          style={{ color: "var(--color-primary-dark)" }}
        >
          Physio Without Border
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar" />

        <Navbar.Offcanvas placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="ms-auto align-items-lg-center">
              <Link
                href="/"
                className={`${styles.navLink} ${
                  isActive("/") ? styles.active : ""
                }`}
                style={{ fontSize: "1.2em" }}
              >
                Home
              </Link>

              <Link
                href="/#services"
                onClick={handleServicesClick}
                className={styles.navLink}
                style={{ fontSize: "1.2em" }}
              >
                Services
              </Link>

              <Link
                href="/about"
                className={`${styles.navLink} ${
                  isActive("/about") ? styles.active : ""
                }`}
                style={{ fontSize: "1.2em" }}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`${styles.navLink} ${
                  isActive("/contact") ? styles.active : ""
                }`}
                style={{ fontSize: "1.2em" }}
              >
                Contact
              </Link>

              <Link
                href="/pricing"
                className={`${styles.navLink} ${
                  isActive("/pricing") ? styles.active : ""
                }`}
                style={{ fontSize: "1.2em" }}
              >
                FAQ
              </Link>

              <Link
                href="/book"
                className={styles.bookButton}
                style={{ fontSize: "1.2em" }}
              >
                Book
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
