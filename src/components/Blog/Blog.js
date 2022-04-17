import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import Hridoy from '../../image/Hridoy.png';
import './Blog.css';

const Blog = () => {
    return (
        <>
            <Row className='py-5 bg-dark text-light'>
                <Col md="4">
                    <img src={Hridoy} className="w-100" alt="" />
                </Col>
                <Col md="4">
                    <div>
                        <h3 className='text-warning py-5 text-center blog-name'>Hellow I am Hridoy Ahmed</h3>
                        <p className='text-center'>I am a trainer of your health. And I have a 12 year experience. I am a skildfull trainer . I am trained by American Couch</p>
                    </div>
                </Col>
                <Col md="4">
                <Accordion  defaultActiveKey={['0']} alwaysOpen>
                        <Accordion.Item className='bg-dark' eventKey="0">
                            <Accordion.Header>First question from your mind ?</Accordion.Header>
                            <Accordion.Body>
                            Manage workouts, nutrition, habit coaching, and messaging - all-in-one place. Easiest solution for personal trainers, sport coaches, & gym owners. Pre-Loaded Templates. Automated Messages. Time-Saving Automation. Steps: Engage Clients With Powerful Tools, Add Clients And Start Training.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className='bg-dark' eventKey="1">
                            <Accordion.Header>Second question from your mind ?</Accordion.Header>
                            <Accordion.Body>
                            In the next 60 seconds, you can make a decision that will change your life forever. Book a Free consultation with one of our expert personal trainers today. Online Courses Available. Fat Loss Training. Private Studios in London. Expert Personal Trainers. Free Consultations
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </>
    );
};

export default Blog;