import React from 'react';
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarLogo from '../Assets/Navbarlogo.png';
const Navbars = () => {

  const scrollValue = () =>{
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
   scroll > 200 ?  navbar.classList.add('scroll-animate') : navbar.classList.remove('scroll-animate')
  }
  window.addEventListener('scroll',scrollValue)

  return (
    <div>
      <Navbar expand="md" >
            <Container fluid id='navbar' className='nav-container' >
              <Navbar.Brand href="#"><img src={NavbarLogo}/></Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll"/>
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                  
                </Nav>
                <NavDropdown title="Home" id="navbarScrollingDropdown" className='nav-links'>
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                <Nav.Link href="#action2" className='nav-links'>About us</Nav.Link>
                <NavDropdown title="Pages" id="navbarScrollingDropdown" className='nav-links'>
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Pages" id="navbarScrollingDropdown" className='nav-links'>
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                <Nav.Link href="#action2" className='nav-links'>Contact Us</Nav.Link>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    </div>
  )
}

export default Navbars
