import React from 'react';

function CardInfo(props) {

    return(
        <div>
            <p className="project-card-title">{props.title}</p>
            <p className="project-card-text">{props.text}</p>
            <p className="project-card-labels">{props.labels}</p>
        </div>
    );
}

export default CardInfo;