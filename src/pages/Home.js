import React from 'react';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Intro from '../components/Intro';

function Home(props) {

    return(
        <div>
            <Intro />
            <div id="projects"><Projects /></div>
            <div id="about"><About /></div>
            <div id="contact"><Contact /></div>
        </div>
    );
}

export default Home;