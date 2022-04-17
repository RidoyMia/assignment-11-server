import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Service from '../Services/Service/Service';

const Shipment = () => {
    const {shipment} = useParams();
    const[services,setServices] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);
    const useid = {shipment};
    const newcar = useid.shipment;
    const array = [];
    const find = services.find(p => p.id.includes(newcar));
    array.push(find);
    console.log(array[0]?.id)
    return (
        <div style={{marginTop :'60px'}}>
           <Row>
          
                 <Col md="12">
                    <Card className='card-container'>
                            
                            <Card.Body>
                            <Card.Img variant="top" src={array[0]?.picture} />
                                <Card.Title>{array[0]?.duration}</Card.Title>
                                <Card.Text>
                                <h3>Price is : {array[0]?.price}</h3>
                                </Card.Text>
                               
                            </Card.Body>
                    </Card>
                </Col>)
           
            
           </Row>
        </div>
    );
};

export default Shipment;