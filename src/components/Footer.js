import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return(
        <footer className="mt-5">
            <Container md={6}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Coded in React
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        © Mary Jiang 2020
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;