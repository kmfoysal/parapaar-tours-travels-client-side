import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import divider from '../../images/divider.png';
import './Footer.css';

const Footer = () => {
    // Font Awesome Icon 
    const faceBook = <FontAwesomeIcon icon={faFacebookF} />
    const insta = <FontAwesomeIcon icon={faInstagram} />
    const linkdin = <FontAwesomeIcon icon={faLinkedinIn} />
    const twitter = <FontAwesomeIcon icon={faTwitter} />
    return (
        <div className='text-center bg-black'>
        <Container className='py-5'>
            <Row>
                <Col>
                    <h3 className='text-white mb-3'>Follow Us On</h3>
                    <img src={divider} alt="divider" />
                    {/* <p className='text-white p-3'>You can follow us on social media and get regular update promotion.</p> */}
                    <div className='social-icon d-flex justify-content-center align-items-center gap-4 mt-4'>
                        <a href="#" className='text-decoration-none'>{faceBook}</a>
                        <a href="#" className='text-decoration-none'>{insta}</a>
                        <a href="#" className='text-decoration-none'>{linkdin}</a>
                        <a href="#" className='text-decoration-none'>{twitter}</a>
                    </div>

                </Col>
                <Col>
                    <h3 className='text-white mb-3'>Office Hours</h3>
                    <img src={divider} alt="divider" />
                    <p className='text-white mb-2 pt-3'>Mon-Thu: 7:00am-8:00pm</p>
                    <p className='text-white'>Fri-Sun: 7:00am-10:00pm</p>
                </Col>
                <Col>
                <h3 className='text-white mb-3'>Our Location</h3>
                    <img src={divider} alt="divider" />
                    <p className='text-white p-3'>North Tower (4th Floor), Road - 1, Sector - 7, Uttara, Dhaka - 1230</p>
                </Col>
            </Row>
        </Container>
        <div className='container-fluid py-3 bg-warning'>
            <p className='m-0 text-dark'>Parapaar Tours & Travels &copy; 2021 | Developed By <strong>K.M FOYSAL</strong> </p>
        </div>
    </div>
    );
};

export default Footer;