import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//import FormControl from "react-bootstrap/FormControl"

export default function BootstrapNavbar() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Battery Pack Generator</Navbar.Brand>
      <Nav className="mr-auto">
      </Nav>
    </Navbar>
    </>
  );
}
