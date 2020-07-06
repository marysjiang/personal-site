import React from 'react';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Intro from '../components/Intro';

function Home(props) {

    return(
        <div class="grid">
            <div class="alignment" id="intro"><Intro /></div>
            <div class="alignment" id="projects"><Projects /></div>
            <div class="alignment" id="about"><About /></div>
            <div class="alignment" id="contact"><Contact /></div>
        </div>
    );
}

export default Home;