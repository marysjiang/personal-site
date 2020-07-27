import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Footer() {

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
            transition={{ opacity: { duration: 1.2 } }}>
                <footer className="mt-5 alignment text-body">
                    <Container md={6}>
                        <Row className="border-line border-dark justify-content-between p-0">
                            <Col className="p-0 py-4" md={3} sm={12}>
                                <p class="footer">Coded in React</p>
                            </Col>
                            <Col className="p-0 py-4 d-flex justify-content-end" md={3}>
                                <p class="footer">© Mary Jiang 2020</p>
                            </Col>
                        </Row>
                    </Container>
                </footer>
        </motion.div>
    );
}

export default Footer;