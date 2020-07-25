import React from 'react';
import { HashLink as Link } from'react-router-hash-link';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import T2PPage from '../pages/T2PPage';

function CardInfo(props) {

    return(
        <div>
            <div class="center-card">
                <Link className="project-card-title" to={`/projects/${props.id}`}>{props.title}</Link>
                <p className="project-card-text">{props.text}</p>
                {/* ✧✦ ↗ */}
                <p className="project-card-labels">{props.labels}</p>
            </div>
            <Switch>
                <Route path="`/projects/${props.id}`"> render={() => <T2PPage />}</Route>
            </Switch>
        </div>
    );
}

export default CardInfo;