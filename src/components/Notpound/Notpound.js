import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Notpound = () => {
    return (
        <div>
            <Container>
                <Row className='mt-5'>
                    <Col md="4"></Col>
                    <Col md="4">
                        <h3 className='py-5 text-danger'>Your searching page not pound !!</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Notpound;