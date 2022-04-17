import React from 'react';
import { Button, Carousel, Col, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import banner from '../../image/banner.jpg';
import './Home.css';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <div className='banner'>
               <Row>
                   {/* <Col md="1"></Col>
                   <Col md="10">
                   <div className='header-content'>
                       <h2 className='text-warning header-title'>Health is Wealth</h2>
                       <p className='text-info'>We know that Health is wealth.So we should at first be strong take our health</p>
                       <Button disabled className='header-button'>Lets start</Button>
                   </div>
                   </Col> */}
                 <div >
                 <Carousel>
                            <Carousel.Item style={{backgroundAttachment :'fixed'}} interval={1000}>
                                <img
                                className="d-block w-100 "
                                height="500px"
                                src={banner}
                                style={{backgroundRepeat :'no-repeat',backgroundPosition : 'center',}}
                                alt="First slide"
                                />
                                <Carousel.Caption className='py-5'>
                                <div className='header-content'>
                       <h2 className='text-warning header-title'>Health is Wealth</h2>
                       <p className='text-info'>We know that Health is wealth.So we should at first be strong take our health</p>
                       <Button disabled className='header-button'>Lets start</Button>
                   </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            
                    </Carousel>
                 </div>
               </Row>
            </div>
            <div>
                <Blog></Blog>
            </div>
            <div>
                <Services></Services>
                
            </div>
        </div>
    );
};

export default Home;