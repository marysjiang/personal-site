import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Contact(props) {
    
    return(
        <Jumbotron className="bg-transparent alignment" jumbotron-fluid p-0>
            <Container fluid={true}>
                <Row className="py-5">
                    <Col className="alignment">
                        <h2 className="text-body">Contact</h2>
                        <p className="text-body">Please reach out for job inquiries, 
                            noodle recommendations, or just to say hi.</p>

                        <p className="text-body">Email<br />
                        jiang.marys@gmail.com</p>

                        <p className="text-body">Links<br />
                        Github 〰〰 LinkedIn</p>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Contact;