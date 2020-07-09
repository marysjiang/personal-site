import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import star from '../assets/images/star.png';

function Intro(props) {
    
    return(
        <Jumbotron className="bg-transparent alignment introduction" jumbotron-fluid p-0>
            <Container fluid={true}>
                <Row className="py-5">
                    <Col id="header">
                        <img src={star} className="mb-3" style={{ height: '23%' }} />
                        <h1>I'm a software engineer<br></br>based in Atlanta</h1>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Intro;