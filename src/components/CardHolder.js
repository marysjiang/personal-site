import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import buildings from '../assets/images/buildings.png';
import bus from '../assets/images/bus.png';
import dark from '../assets/images/dark.png';
import idk from '../assets/images/idk.png';
import wall from '../assets/images/wall.png';

class CardHolder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Tale of Two Partners',
                    text: ' is an authoring platform for exploring dramatic contrast',
                    labels: 'Frontend web development, prototyping, research',
                    img: buildings
                },
                {
                    id: 1,
                    title: 'KK Runner',
                    text: ' is an infinite side-scroller game made for the Game Boy Advance',
                    labels: 'Coded in C, game design',
                    img: bus
                },
                {
                    id: 2,
                    title: 'Produce in Season',
                    text: ' is a website that checks what produce is currently in season',
                    labels: 'Frontend web development, prototyping',
                    img: dark
                },
                {
                    id: 3,
                    title: 'Graphic Design',
                    img: idk
                },
                {
                    id: 4,
                    title: 'Film Photography',
                    img: wall
                },
            ] 
        }
    }

    createCards = (items) => {
        return items.map(item => {
            // return <Card item={item} onClick={(e => this.handleClick(item.id, e))} key={item.id} />
            return <Card item={item} key={item.id} />
        })
    }

    render() {
        return(
            <Container>
                {this.createCards(this.state.items)}
            </Container>
        );
    }
}

export default CardHolder;