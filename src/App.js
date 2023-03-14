import './App.css';
import img1 from './Assets/img-1.png'
import img2 from './Assets/img-2.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Card from 'react-bootstrap/Card';
import { IoShieldHalfOutline } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoodIcon from '@mui/icons-material/Mood';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function App() {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      let entryShow = entry.target.classList;
      entry.isIntersecting ? entryShow.add('scroll-content') : entryShow.remove('scroll-content')
    })
  })

  const scrollEffect = document.querySelectorAll('.scrollEffect')
  scrollEffect.forEach(e => observer.observe(e))

  return (
    <div className='app'>
      <div className='bg1'>
        <div className='container-fluid'>
          <Navbar />
          <div className='bg1-content row'>
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 overall-content mb-4'>
              <div className='content-1'>Simple online Hotel</div>
              <h1 className='my-3'>Management System</h1>
              <p className='para my-3'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
              <div className='mt-5'>
                <button>GET STARTED</button>
                <span className='trial ms-4 mt-4 d-inline-block font-weight-bold'>14-Day FREE Trial</span>
              </div>
            </div>
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center '>
              <img src={img1} className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
      <div className='bg2'>
        <div className='container-fluid'>
          <div className='bg2-content'>
            <div className='row'>
              <div className='header col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12' data-aos='fade-right'>
                <div className='content-1'>Why Choose Us</div>
                <h1 className='my-3'>Our Best Services</h1>
                <p className='para my-3'>Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the..</p>
                <p>01. Praesent vitae magna ut diam rutrum congue.</p>
                <p>02. Nam non nibh sed elit bibendum maximus.</p>
                <div className='mt-5 mb-5'>
                  <button>GET STARTED</button>
                </div>
              </div>
              <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12'>
                <div className='row'>
                  <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                    <Card className='card-style' data-aos='fade-up'>
                      <div className='d-flex justify-content-center'>
                        <span className='shield-icon'>
                          <IoShieldHalfOutline />
                        </span>
                      </div>
                      <Card.Body>
                        <Card.Title className='card-title my-3'>Fast & Optimized</Card.Title>
                        <Card.Text className='card-text'>
                          On the other hand, we nounce with righteous indation and dilike men who are.
                        </Card.Text>
                        <Card.Text className='text-center pt-1'>Read more</Card.Text>
                      </Card.Body>
                    </Card>
                    <Card className='card-style' data-aos='fade-up'>
                      <div className='d-flex justify-content-center'>
                        <span className='shield-icon'>
                          <IoShieldHalfOutline />
                        </span>
                      </div>
                      <Card.Body>
                        <Card.Title className='card-title my-3'>Fast & Optimized</Card.Title>
                        <Card.Text className='card-text'>
                          On the other hand, we nounce with righteous indation and dilike men who are.
                        </Card.Text>
                        <Card.Text className='text-center pt-1'>Read more</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 my-5'>
                    <Card className='card-style' data-aos='fade-up'>
                      <div className='d-flex justify-content-center'>
                        <span className='shield-icon'>
                          <IoShieldHalfOutline />
                        </span>
                      </div>
                      <Card.Body>
                        <Card.Title className='card-title my-3'>Fast & Optimized</Card.Title>
                        <Card.Text className='card-text'>
                          On the other hand, we nounce with righteous indation and dilike men who are.
                        </Card.Text>
                        <Card.Text className='text-center pt-2'>Read more</Card.Text>
                      </Card.Body>
                    </Card>
                    <Card className='card-style' data-aos='fade-up'>
                      <div className='d-flex justify-content-center'>
                        <span className='shield-icon'>
                          <IoShieldHalfOutline />
                        </span>
                      </div>
                      <Card.Body>
                        <Card.Title className='card-title my-3'>Fast & Optimized</Card.Title>
                        <Card.Text className='card-text'>
                          On the other hand, we nounce with righteous indation and dilike men who are.
                        </Card.Text>
                        <Card.Text className='text-center pt-1'>Read more</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container-fluid'>
            <div className='bg2-sub-content'>
              <div className='row'>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                  <div className='sub1-content'>
                    <img src={img2} className='img-fluid' />
                  </div>
                </div>
                <div className='sub2-content col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-5'>
                  <div className='content-1 mt-3'>Reservations</div>
                  <h1>Management</h1>
                  <p className='para'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web.</p>
                  <div className=''>
                    <button>GET STARTED</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ minHeight: 'auto', background: '#f9faff' }}>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={6} xl={3} xxl={3}>
              <div className='margin-align'>
                <div className='circle-outline'><AccessTimeIcon className='icon' /></div>
                <h2 className='mt-3'>10+</h2>
                <p>Years of Operation</p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} xl={3} xxl={3}>
              <div className='margin-align'>
                <div className='circle-outline'><MoodIcon className='icon' /></div>
                <h2 className='mt-3'>150</h2>
                <p>Happy Customer</p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} xl={3} xxl={3}>
              <div className='margin-align'>
                <div className='circle-outline'><AccountCircleIcon className='icon' /></div>
                <h2 className='mt-3'>12</h2>
                <p>Team Member</p>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} xl={3} xxl={3}>
              <div className='margin-align'>
                <div className='circle-outline'><EmojiEventsIcon className='icon' /></div>
                <h2 className='mt-3'>25</h2>
                <p>Award</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className='dummy-text text-center '>
        <h3>Benefits of Template</h3>
        <div className='pt-2 blur'>Looked up one of the more obscure Latin words, consectetur, from</div>
        <div className='blur'>a Lorem Ipsum passage, and going</div>
      </Container>
      <Container>
        <Row>
          <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
            <Card className='cards-outline m-3'>
              <Card.Body>
                <div className='d-flex justify-content-center'>
                  <span className='shield-icon'>
                    <IoShieldHalfOutline />
                  </span>
                </div>
                <Card.Title className='card-title my-4'>Latest Technology</Card.Title>
                <Card.Text className='card-text'>
                  On the other hand, we nounce with righteous indation and dilike men who are.
                </Card.Text>
                <Card.Text>Read more</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
            <Card className='cards-outline m-3'>
              <Card.Body>
                <div className='d-flex justify-content-center'>
                  <span className='shield-icon'>
                    <IoShieldHalfOutline />
                  </span>
                </div>
                <Card.Title className='card-title my-4'>Latest Technology</Card.Title>
                <Card.Text className='card-text'>
                  On the other hand, we nounce with righteous indation and dilike men who are.
                </Card.Text>
                <Card.Text>Read more</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
            <Card className='cards-outline m-3'>
              <Card.Body>
                <div className='d-flex justify-content-center'>
                  <span className='shield-icon'>
                    <IoShieldHalfOutline />
                  </span>
                </div>
                <Card.Title className='card-title my-4'>Latest Technology</Card.Title>
                <Card.Text className='card-text'>
                  On the other hand, we nounce with righteous indation and dilike men who are.
                </Card.Text>
                <Card.Text>Read more</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xxl={3} xl={3} lg={6} md={6} sm={12} xs={12}>
            <Card className='cards-outline m-3'>
              <Card.Body>
                <div className='d-flex justify-content-center'>
                  <span className='shield-icon'>
                    <IoShieldHalfOutline />
                  </span>
                </div>
                <Card.Title className='card-title my-4'>Latest Technology</Card.Title>
                <Card.Text className='card-text'>
                  On the other hand, we nounce with righteous indation and dilike men who are.
                </Card.Text>
                <Card.Text>Read more</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <div className='bg3'>
        <Container >
          <div className='text-center mb-5'>
          <h3 className='pt-3'>Our Pricing Plan</h3>
          <div className='pt-2 blur'>Looked up one of the more obscure Latin words, consectetur, from</div>
          <div className='blur'>a Lorem Ipsum passage, and going</div>
          </div>
          <Table responsive striped bordered hover className='table-light'>
            <thead>
              <tr>
                <th>Pricing Plan</th>
                <th>Basic Plan <br/> $20/Month</th>
                <th>Advanced Plan <br/> $30/Month</th>
                <th>Expert Plan <br/> $40/Month</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01. Storage</td>
                <td>2GB</td>
                <td>3GB</td>
                <td>2GB</td>
              </tr>
              <tr>
                <td>02. Bandwith Space</td>
                <td>Limited</td>
                <td>Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>03. Download</td>
                <td>Limited</td>
                <td>Limited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>04. Account</td>
                <td>2 Account</td>
                <td>5 Account</td>
                <td>10 Account</td>
              </tr>
              <tr>
                <td>05. Bandwith Space</td>
                <td>Limited</td>
                <td>Unimited</td>
                <td>Unlimited</td>
              </tr>
              <tr className='buttonId'>
                <td></td>
                <td >
                  <button>SELECT PLAN</button>
                </td>
                <td>
                  <button>SELECT PLAN</button>
                </td>
                <td>
                  <button>SELECT PLAN</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
      <div className='bg4'>
        <Container className='vetical-align'>
            <h1>Get Started with Theme</h1>
            <div className='mt-3'>Richard McClintock, a Latin professor at Hampden-Sydney College in</div>
            <div>Virginia, looked up one of the more obscure</div>
            <button className='btn mt-5'>GET STARTED</button>
        </Container>
      </div>

    </div >
  );
}

export default App;
