import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import star from '../assets/images/star.png';

function Intro(props) {
    
    return(
        <Jumbotron className="bg-transparent" jumbotron-fluid p-0>
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={7} sm={5}>
                        <img src={star} className="" style={{ height: '25%' }} />
                        <h1>I'm a software developer<br></br>based in Atlanta</h1>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Intro;