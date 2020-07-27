import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Intro(props) {
    
    return(
        <Jumbotron className="bg-transparent alignment introduction" jumbotron-fluid p-0>
            <Container fluid={true}>
                <Row className="py-7">
                    <Col id="header">
                        <h1><i>✦</i></h1>
                        <h1>I'm a software engineer<br></br>based in Atlanta.</h1>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Intro;