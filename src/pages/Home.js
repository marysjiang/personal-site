import React from 'react';
import Projects from '../pages/Projects';
import Intro from '../components/Intro';

function Home(props) {

    return(
        <div>
            <Intro title={props.title} subtitle={props.subtitle} text={props.text}/>
            <Projects />
        </div>
    );
}

export default Home;