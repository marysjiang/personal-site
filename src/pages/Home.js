import React from 'react';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Intro from '../components/Intro';
import Container from 'react-bootstrap/Container';
import Footer from '../components/Footer';

function Home(props) {

    return(
            <div class="grid justify-content-center">
                <div class="alignment" id="intro"><Intro /></div>
                <div class="alignment" id="projects"><Projects /></div>
                <div class="alignment" id="about"><About /></div>
                <div class="alignment" id="contact"><Contact /></div>
                <div class="alignment" id="footer"><Footer /></div>
            </div>
    );
}

export default Home;