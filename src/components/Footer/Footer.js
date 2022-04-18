import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        // footer section
        <div fixed="bottom" className='banner-footer'>
            <Container>
                <Row className='py-3'>
                    <Col md="8" className='text-light'>
                        <h2 className=' text-warning py-5'>Contact me </h2>
                      <p className='contact-container'><span>Phone : </span> +8801314791920</p>
                      <p className='contact-container'><span>Email : </span> Ridoymia153159hero@gmail.com</p>
                      <p className='contact-container'><span>Wattsupp : </span> +8801314791920</p>
                      <p className='contact-container'><span>Address : </span>Habiganj,Sylhet,Bangladesh</p>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;