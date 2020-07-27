import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';

import t2p_borderless from '../assets/images/t2p_borderless.png';
import kk_runner_borderless from '../assets/images/kk_runner_borderless.png';
import buildings from '../assets/images/buildings.png';
// import graphic_design_banner from '../assets/images/graphic_design_banner.png';
// import film_photography from '../assets/images/film_photography.png';

class CardHolder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 'tale-of-two-partners',
                    title: 'Tale of Two Partners',
                    text: ' is an authoring platform for exploring dramatic contrast',
                    labels: 'Frontend web development, prototyping, research',
                    url: 'https://github.com/marysjiang/t2p',
                    img: t2p_borderless
                },
                {
                    id: 'kk-runner',
                    title: 'K.K. Runner',
                    text: ' is an infinite side-scroller game made for the Game Boy Advance',
                    labels: 'Coded in C, game design',
                    url: 'https://github.com/marysjiang/cs2261',
                    img: kk_runner_borderless
                }
                // {
                //     id: 'produce-in-season',
                //     title: 'Produce in Season',
                //     text: ' is a website that checks what produce is currently in season',
                //     labels: 'Frontend web development, prototyping',
                //     img: t2p_borderless
                // },
                // {
                //     id: 'graphic-design',
                //     title: 'Graphic Design',
                //     img: graphic_design_banner
                // },
                // {
                //     id: 'film-photography',
                //     title: 'Film Photography',
                //     img: film_photography
                // },
            ] 
        }
    }

    createCards = (items) => {
        return items.map(item => {
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