import React, { useEffect } from 'react';
// import { useSpring, animated } from 'react-spring';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { HashLink as Link } from'react-router-hash-link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import CardInfo from '../components/CardInfo';

function Card(props) {

    // const style = useSpring({
    //     opacity: 1,
    //     from: {opactiy: 0},
    // });

    let fields = ({
        id: props.item.id,
        title: props.item.title,
        text: props.item.text,
        labels: props.item.labels,
        url: props.item.url
    });

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return(
        <motion.div
            ref={ ref }
            animate={ controls } 
            initial="hidden"
            variants={{ 
                visible: { y: -40, opacity: 1 }, 
                hidden: { opacity: 0 }}}
            transition={{ opacity: { duration: 1.5 } }}>
                {/* <Link className="link-color" to={`/projects/${fields.id}`}> */}
                <a href={fields.url} className="link-color">
                    <Container className="justify-content-center project-card">
                        <Row>
                            <Col className="leading" sm={7}><CardInfo 
                                id={fields.id}
                                title={fields.title} 
                                text={fields.text} 
                                labels={fields.labels} />
                            </Col>
                            <Col sm={5} className="trailing">
                                <img className="project-card-img" src={props.item.img} alt={"description of image"} />
                            </Col>
                        </Row>
                    </Container>
                </a>
        </motion.div>
    );
}

export default Card;