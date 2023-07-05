import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './project.css';


function Navbar1(){
    
    return(
        <Navbar className="navbar bg-body-tertiary">
        <Container>
          <Navbar.Brand className='navleft' href="#home"><b>Senchola University</b></Navbar.Brand>

          <Nav className='navright' variant="underline" >

      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about us">About Us</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/sevice"> Service</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/why senchola">Why Senchola</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/form">Form</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/contact">Contact Us</Nav.Link>
      </Nav.Item>
      <Button  variant="outline-secondary" href="#">Login</Button>{' '}
      <Button variant="success" href="#">Sign up</Button>{' '}

    </Nav>
        </Container>
      </Navbar>

    )
}

export default Navbar1;