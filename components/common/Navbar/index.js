import Image from "next/image";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import PawLogo from "../../../public/images/PawLogo.png";
import styles from "./Navbar.module.scss";

const NavBar = () => {
  var navLinks = [
    { label: "WHO WE ARE", value: "#who-we-are" },
    { label: "WHAT WE DO", value: "#what-we-do" },
    { label: "EVENTS", value: "#events " },
    { label: "MEET OUR RESCUE", value: "#meet-our-rescue" },
    { label: "COMMUNITY", value: "#community" },
    { label: "CONTACT US", value: "#contact-us" },
  ];

  return (
    <Navbar collapseOnSelect expand="lg" className={styles["paw-navbar"]}>
      <Container>
        <Navbar.Brand href="#home">
          <Image src={PawLogo} alt="PAW" height={80} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            {navLinks.map((navLink, i) => (
              <Nav.Link
                href="#deets"
                className={styles["paw-nav-link"]}
                key={navLink.value}
              >
                {navLink.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
