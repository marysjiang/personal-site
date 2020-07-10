import React from 'react';

function CardInfo(props) {

    return(
        <div class="project-card-format">
            <p className="project-card-text">{props.text}</p>
            <p className="project-card-labels">{props.labels}</p>
        </div>
    );
}

export default CardInfo;