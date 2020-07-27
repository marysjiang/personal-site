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
                                the intersections between technology, art, and design and ways to use them in meaningful and impactful ways.</p>

                            <p className="text-body">This summer, I'm interning at Tresata, a data analytics company based in Charlotte, NC. 
                                I'm having a blast and get to work on some very relevant COVID-19 data collection.
                                I'm also working on visualizing the data to identify linkages between COVID-19 cases, socio-demographics, and
                                access to public services.</p>

                            <p className="text-body">Prior to this, I did undergraduate research with PeN Lab and DILAC on romance storylines and exploring ways 
                                to create dramatic contrast in lesbian and gender neutral love triangles.</p>

                            <p className="text-body">Outside of school, I host <a href="https://www.wrek.org/goldsoundz/"><span id="links">Goldsoundz</span></a> on WREK 91.1 FM, <a href="https://www.flickr.com/photos/189479877@N04/"><span id="links">shoot film</span></a>, <a href="https://www.instagram.com/wrekdesigncollective/?hl=en"><span id="links">design with friends</span></a>, and try to 
                                find the best bowl of noodles around town. I also like cooking, being on the internet, and bossa nova. I currently live in Atlanta, where I grew up.</p> 
                                
                            <p className="text-body">Here to learn and grow! (ㅇㅅㅇ❀)</p>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </motion.div>
    );
}

export default About;