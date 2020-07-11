import React from 'react';
import { HashLink as Link } from'react-router-hash-link';

function CardInfo(props) {

    return(
        <div class="center-card">
            <Link className="project-card-title" to={`/projects/${props.id}`}>{props.title}</Link>
            <p className="project-card-text">{props.text}</p>
            <p className="project-card-labels">{props.labels}</p>
        </div>
    );
}

export default CardInfo;