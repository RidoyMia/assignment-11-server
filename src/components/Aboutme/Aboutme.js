import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Aboutme = () => {
    return (
      <div className='bg-dark'>
            <Container className='mt-5'>
           <Row className='py-5'>
               <Col md="6" className=' mt-5'>
                   <h2 className='text-light'>Hellow My name is <span className='text-warning'>Hridoy Ahmed</span></h2>
                   <Button disabled className='mt-5 w-50' variant='primary'>Know more</Button>
               </Col>
               <Col md="4">
                   <h3 className=' text-warning'>My goal</h3>
                   <p className='text-light'>My goal is to be a good web developer. And I got a good job as a web developer. Which is why I can support my family a little. And finally I can pay all the tuition fees for my BSc. </p>
                   <h3 className='text-warning'>How to work hard to reach my goal ?</h3>
                   <p className='text-light'>I managed to keep all the comforts away to reach my goal. For this I will continue working for a minimum of 5-6 hours every day. Because I know that if you work hard, you will succeed one day InshaAllah</p>
               </Col>
           </Row>
        </Container>
      </div>
    );
};

export default Aboutme;