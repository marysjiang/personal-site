import React from 'react';
import CardHolder from '../components/CardHolder';

function Projects(props) {

    return(
        <div
            class="alignment" 
            id="projects"
            className="anchor-projects projects-width">
                <h2 className="projects">Projects</h2>
                <CardHolder />
        </div>
    );
}

export default Projects;