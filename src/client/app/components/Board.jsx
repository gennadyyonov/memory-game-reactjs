import React from 'react';
import StatusBar from './StatusBar.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Rules from './Rules.jsx';

export default class Board extends React.Component {

    render() {
        const message = this.statusMessage();
        const cards = [];
        this.props.cards.forEach((card, index) => {
            cards.push(<Card key={index} card={card}/>);
        });
        return (
            <div>
                <StatusBar message={message}/>
                <div>{cards}</div>
                <Button>New Game</Button>
                <Rules/>
            </div>
        );
    }

    statusMessage() {
        const maxNumberOfAttempts = this.props.maxNumberOfAttempts;
        const attempt = this.props.attempt;
        const cards = this.props.cards;
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