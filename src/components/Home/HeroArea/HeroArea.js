import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HeroArea.css';

const HeroArea = () => {
    return (
        <div>
            <section className='hero-banner'>
                <Container>
                    <Row>
                        <Col className='d-flex flex-column justify-content-center align-items-center' style={{height:"600px"}}>
                          <h2>EXPLORE THE WORLD</h2>
                          <p className='text-white text-center fs-5 w-50 mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At repellat magnam cupiditate mollitia magni. Voluptate quaerat veritatis dolore dolores aliquam ab fugit maxime, labore nobis, ratione odio, aspernatur nesciunt accusantium.</p>
                          <button className='btn btn-lg btn-outline-warning text-white px-5 py-3 fs-5' >BOOK YOUR PACKAGE</button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default HeroArea;