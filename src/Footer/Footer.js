import React from 'react';
import './Footer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import NavbarLogo from '../Assets/Navbarlogo.png';

const Footer = () => {
  return (
    <div>
      <div className='footer-bg'>
        <Container>
          <Row>
            <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
              <div>
                <img src={NavbarLogo} />
              </div>
              <div className='footer-content mt-4'>
                <p>Randomised words which don't look even slightlyvable. If you are going to use a passage of Lorem Ipsum, you need to be sure ook even slightly.</p>
              </div>
            </Col>
            <Col xxl={2} xl={2} lg={2} md={3} sm={6} xs={6}>
              <div className='footer-menu'>
                <h6>Helpful Links</h6>
                <span></span>
                  <div>About</div>
                  <div>FAQ's</div>
                  <div>Blog</div>
                  <div>Contact</div>
              </div>
            </Col>
            <Col xxl={2} xl={2} lg={2} md={3} sm={6} xs={6}>
              <div className='footer-menu2'>
                  <div>Features</div>
                  <div>Team</div>
                  <div>Services</div>
                  <div>Pricing</div>
              </div>
            </Col>
            <Col xxl={2} xl={2} lg={2} md={3} sm={6} xs={6}>
              <div className='footer-menu'>
                <h6>Resources</h6>
                <span className='line2'></span>
                  <div>Download</div>
                  <div>Events</div>
                  <div>Partners</div>
                  <div>Help Center</div>
              </div>
            </Col>
            <Col xxl={2} xl={2} lg={2} md={3} sm={6} xs={6}>
              <div className='footer-menu'>
                <h6>Product</h6>
                <span className='line3'></span>
                  <div>Search API</div>
                  <div>Analytics</div>
                  <div>Query Rules</div>
                  <div>Offline Search</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className='copyright py-3'>
        <Row>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
           <p>Copyrights © 2019 All Rights Reserved by rnr</p>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <p className='text-end pe-5'>Design by Regal theme</p>
          </Col>
        </Row>
      </Container>
      {/* <h1 className='ms-xxl-5 ms-xl-0 ms-lg-5 ms-md-0 ms-sm-5 ms-xs-5'>sdsc</h1> */}
    </div>
  )
}

export default Footer;
