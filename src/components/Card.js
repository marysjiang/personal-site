import React from 'react';
import { useSpring, animated } from 'react-spring';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import CardInfo from '../components/CardInfo';

function Card(props) {

    const style = useSpring({
        opacity: 1,
        from: {opactiy: 0},
    });

    return(
        <Container className="justify-content-center project-card">
            <Row>
                <Col className="leading" sm={7}><CardInfo 
                    id={props.item.id} 
                    title={props.item.title} 
                    text={props.item.text} 
                    labels={props.item.labels} />
                </Col>
                <Col sm={5} className="trailing">
                    <img className="project-card-img" src={props.item.img} alt={"description of image"} />
                </Col>
            </Row>
        </Container>
    );
}

export default Card;