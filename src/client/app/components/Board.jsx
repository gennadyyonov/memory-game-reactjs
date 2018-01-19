import React from 'react';
import ArrayUtils from './ArrayUtils.jsx';
import StatusBar from './StatusBar.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Rules from './Rules.jsx';

export default class Board extends React.Component {

    constructor(props) {
        super(props);

        const cards = this.initCards();
        this.state = {cards: cards, attempt: 0};
    }

    initCards() {
        const values = this.randomValues();
        let cards = [];
        for (let i = 0; i < values.length; i++) {
            let card = {value: values[i], opened: false, locked: false};
            cards.push(card);
        }
        return cards;
    }

    randomValues() {
        const pairs = this.props.pairs;
        let values = [];
        for (let i = 0; i < pairs; i++) {
            values.push(i);
            values.push(i);
        }
        ArrayUtils.shuffle(values);
        return values;
    }

    render() {
        const message = this.statusMessage();
        const cards = [];
        this.state.cards.forEach((card, index) => {
            cards.push(<Card key={index} card={card}/>);
        });
        return (
            <div>
                <StatusBar message={message}/>
                <div className="board">{cards}</div>
                <Button>New Game</Button>
                <Rules/>
            </div>
        );
    }

    statusMessage() {
        const maxNumberOfAttempts = this.props.maxNumberOfAttempts;
        const attempt = this.state.attempt;
        const cards = this.state.cards;
        const left = maxNumberOfAttempts - attempt;
        if (left <= 0) {
            return 'You Loose...';
        }
        for (let i = 0; i < cards.length; i++) {
            if (!cards[i].opened) {
                return left + ' attempts left.';
            }
        }
        return 'You Win!';
    }
}