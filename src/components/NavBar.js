//Purpose: Creates and displays the Navbar component
import React from "react";
import { DemoDayButton } from "./DemoDayButton";
import { TypingText2 } from "./TextAnimation";
import { Navbar, Nav } from "react-bootstrap";

export const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">
          <div className="typing-holder">
            <TypingText2 />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
            <Nav.Link href="#devList" className="nav-item">
              DEVELOPERS
            </Nav.Link>
            <Nav.Link href="#techStack" className="nav-item">
              TECH STACK
            </Nav.Link>
            <Nav.Link href="#thanksLocation" className="nav-item">
              THANKS
            </Nav.Link>
            <Nav.Link
              href="https://www.nashss.com/demoday"
              target="_blank"
              rel="noreferrer"
            >
              <DemoDayButton />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
