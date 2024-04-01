import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import './Navs.css';
import logo from "../../assets/logo.png";
import Home from "../home-page/Home";
const Navbarpage = () => {
  return (
    <Navbar expand="lg" variant="light">
      <Container className="nav">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo"/>
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About us</Nav.Link>
            <Nav.Link href="#product">Explore food</Nav.Link>
            <Nav.Link href="#REVIEW">Review</Nav.Link>
            <Nav.Link href="#footer">FAQ</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="" id="lastnav">158393</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarpage;
