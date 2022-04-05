import React, { useState } from "react";
import { Container, Navbar, Nav, Image, Button } from "react-bootstrap";
import logo from "./../../assets/img/logo.png";
import { Link } from "react-router-dom";
import "./hamburger.scss";
import SideBar from "./../sidebar/index";
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <>
        <Navbar bg="apple-cyan" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/" className="p-0">
              <Image src={logo} width="64" className="shadow-sm" />
            </Navbar.Brand>
            <Button
              variant="outline-apple-blue text-apple-red"
              onClick={handleShow}
            >
              Menu
            </Button>
            <SideBar show={show} handleClose={handleClose} />
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
