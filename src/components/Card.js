import React from 'react';
import { useSpring, animated } from 'react-spring';

import CardInfo from '../components/CardInfo';

function Card(props) {

    const style = useSpring({
        opacity: 1,
        from: {opactiy: 0}
    });

    return(
        <animated.div className="d-inline-block project-card" style={style} onClick={(e) => props.click(props.item)}>
            <div className="leading"><CardInfo title={props.item.title} text={props.item.text} labels={props.item.labels} /></div>
            <img className="project-card-img trailing" src={props.item.img} alt={props.item.img} />
        </animated.div>
    );
}

export default Card;