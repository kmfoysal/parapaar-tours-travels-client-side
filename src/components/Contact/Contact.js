import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationArrow, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    
    const phone = <FontAwesomeIcon icon={faPhoneAlt} />
    const email = <FontAwesomeIcon icon={faEnvelope} />
    const location = <FontAwesomeIcon icon={faLocationArrow} />


    return (
        <div>
            <div className='contact-bg'>
                <Container>
                    <Row className='align-items-center' style={{height:'400px'}}>
                    <Col>
                        <h2 className='mb-4'>Contact Us</h2>
                        <p className='fs-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                    </Col>
                    </Row>
                </Container>
           </div>
           <div className='bg-light py-5'>
            <Container className='py-5'>
                <Row>
                    <Col sm={4}>
                      <h3 className='fs-1'>GET IN TOUCH</h3>
                      <hr className='w-25 mb-5'/>
                      <div className="contact-info">
                         <span>{phone}</span>
                         <div>
                             <h5 className='text-uppercase'>Phone Number</h5>
                             <h6 className='text-muted'>+8801613472285</h6>
                         </div>
                      </div>
                      <div className="contact-info">
                         <span>{email}</span>
                         <div>
                             <h5 className='text-uppercase'>Email</h5>
                             <h6 className='text-muted'>contact.kmfoysal@gmail.com</h6>
                         </div>
                      </div>
                      <div className="contact-info">
                         <span>{location}</span>
                         <div>
                             <h5 className='text-uppercase'>Address</h5>
                             <h6 className='text-muted'>North Tower (4th Floor), Uttara, Dhaka-1230.</h6>
                         </div>
                      </div>
                    </Col>
                    <Col lg={8} className='px-5'>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control size='lg' type="text" placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control size='lg' type="email" placeholder="Enter Your Email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <textarea size='lg' className='form-control' cols="30" rows="5" placeholder="Your Message"></textarea>
                            </Form.Group>
                            <Button variant="warning" size='lg' type="submit" className='px-5'>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
    );
};

export default Contact;