import React, { useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Contact(props) {

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
                <Jumbotron className="bg-transparent alignment" jumbotron-fluid p-0>
                    <Container fluid={true}>
                        <Row className="py-5">
                            <Col className="alignment">
                                <h2 className="text-body">Contact</h2>
                                <p className="text-body">Please reach out for job inquiries, 
                                    noodle recommendations, or just to say hi.</p>

                                <p className="text-body">Email<br />
                                <a href="mailto:jiang.marys@gmail.com"><span id="links">jiang.marys@gmail.com</span></a></p>

                                <p className="text-body">Links<br />
                                <a href="https://github.com/marysjiang"><span id="links">Github</span></a> 〰〰 <a href="https://www.linkedin.com/in/marysjiang/"><span id="links">LinkedIn</span></a></p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
        </motion.div>
    );
}

export default Contact;