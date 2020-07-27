import React, { useEffect } from 'react';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Marquee from 'react-smooth-marquee';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Home(props) {
    // const [shouldShowActions, setShouldShowActions] = React.useState(false);
    // const [lastYPos, setLastYPos] = React.useState(0);

    // React.useEffect(() => {
    //     function handleScroll() {
    //         const yPos = window.scrollY;
    //         const isScrollingDown = lastYPos < yPos;

    //         setShouldShowActions(isScrollingDown);
    //         setLastYPos(yPos)
    //     }

    //     window.addEventListener('scroll', handleScroll, false);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll, true);
    //     };
    // }, [lastYPos]);

    // const controls = useAnimation();
    // const [ref, inView] = useInView();

    // useEffect(() => {
    //     if (inView) {
    //         controls.start("visible");
    //     }
    // }, [controls, inView]);

    return(
        <div>
            <div class="grid justify-content-center">
                <div class="alignment" id="intro"><Intro /></div>
            </div>
            {/* <div><Marquee>MARY JIANG IS A SOFTWARE DEVELOPER BASED IN ATLANTA. SEEKING NEW OPPORTUNITIES    •    MARY JIANG IS A SOFTWARE DEVELOPER BASED IN ATLANTA. SEEKING NEW OPPORTUNITIES    •    </Marquee></div> */}
            <div class="grid justify-content-center">
                <div
                    class="alignment" 
                    id="projects">
                    <Projects />
                </div>
                <div 
                    class="alignment" id="about">
                    <About />
                </div>
                <div 
                    class="alignment" id="contact">
                    <Contact />
                </div>
                <div
                    class="alignment" id="footer">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Home;