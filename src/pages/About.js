import React, { useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About(props) {
    
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
            transition={{ opacity: { duration: 1.5 } }} 
            className="anchor-about">
            <Jumbotron className="bg-transparent alignment" jumbotron-fluid p-0>
                <Container fluid={true}>
                    <Row className="py-5">
                        <Col className="alignment">
                            <h2 className="text-body"> About</h2>
                            <p className="text-body">Howdy, I’m currently a student at Georgia Tech, studying 
                                computer science and how to design and create things for people. I’m interested in exploring 
                                the intersections between technology, art, and design.</p>

                            <p className="text-body">This summer, I interned at Tresata, a data analytics company based in Charlotte, NC. 
                                I had a blast and got to work on some very relevant COVID-19 info visualization, using [redacted]. 
                                Prior to that, I did undergraduate research with DILAC on romance storylines and exploring ways 
                                to create dramatic contrast.</p>

                            <p className="text-body">Outside of school, I host Goldsoundz on WREK 91.1 FM, shoot film, design for friends, and try to 
                                find the best bowl of noodles in Atlanta. I currently live in Atlanta, where I grew up.</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </motion.div>
    );
}

export default About;