import React, {useState} from 'react';
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import SidebarButton from "../sidebar";
import SideBar from "../../sidebar";

const NavbarMenu = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
    };
    return (
        <>
            <Navbar bg="apple-cyan" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="p-0">
                        <Image src={logo} width="64" className="shadow-sm"/>
                    </Navbar.Brand>
                    <SidebarButton handleShow={handleShow} show={show}/>
                    <SideBar show={show} handleClose={handleClose}/>
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
    );
};

export default NavbarMenu;