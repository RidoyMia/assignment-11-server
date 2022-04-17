import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from './Service/Service';

const Services = () => {
    const[services,setServices] = useState([]);
   useEffect(()=>{
       fetch('data.json')
       .then(res => res.json())
       .then(data => setServices(data))
   },[])
    return (
        <Container>
            <h1 className='text-warning text-center py-3'>My services</h1>
            <Row className='py-5'>
                {
                    services.map( service =><Col className='my-3' md="4" sm="5">
                        <Service service={service}></Service>
                    </Col>)
                }
             
            </Row>
        </Container>
    );
};

export default Services;