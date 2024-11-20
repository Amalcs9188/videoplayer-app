import { Link } from 'react-router-dom';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand style={{fontSize:"2em"}}><Link to={'/'} className=' text-decoration-none'>
      <i  className="fa-solid fa-play me-2"></i>
       MYVID</Link></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
