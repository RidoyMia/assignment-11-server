
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './service.css';



const Service = (props) => {
    const navigate = useNavigate();
    const details = ()=>{
        navigate(`/details/${id}`)
    }
    const{picture,duration,price,id,description}=props.service;
    return (
        <div>
            <Card className='card-container'>
                <Card.Img height="200px" variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{duration}</Card.Title>
                    <Card.Text>
                      {/* <h3>Price is : {price}</h3> */}
                      <p>{description.slice(0,100)}</p>
                      <h3>Price is :{price}</h3>
                    </Card.Text>
                    <Button onClick={details}>See details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;