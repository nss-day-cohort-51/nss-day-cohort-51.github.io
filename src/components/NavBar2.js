import React from "react";
import { DemoDayButton } from "./DemoDayButton";
import { TypingText2 } from "./TextAnimation";
import { Navbar, Nav } from "react-bootstrap";

export const NavBar2 = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
            <Nav.Link href="#techStack">TECH STACK</Nav.Link>
            <Nav.Link href="#thanksLocation">THANKS</Nav.Link>
            <DemoDayButton />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div>
          <Navbar.Brand href="#home">
            <div className="typing-holder">
              <TypingText2 />
            </div>
          </Navbar.Brand>
        </div>
        <div className="container">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#devList">DEVELOPERS</Nav.Link>
              <Nav.Link href="#techStack">TECH STACK</Nav.Link>
              <Nav.Link href="#thanksLocation">THANKS</Nav.Link>
              <Nav.Link href="https://www.nashss.com/demoday">
                <DemoDayButton />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar> */}
    </>
  );
};
