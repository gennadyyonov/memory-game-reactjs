import React from 'react';
import ArrayUtils from './ArrayUtils.jsx';
import StatusBar from './StatusBar.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Rules from './Rules.jsx';

export default class Board extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.newGame();

        this.handleCardClick = this.handleCardClick.bind(this);
        this.handleNewGameClick = this.handleNewGameClick.bind(this);
    }

    newGame() {
        const cards = this.initCards();
        return {cards: cards, attempt: 0, selected: null};
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

    handleCardClick(index) {
        const cards = this.state.cards;
        let selected = this.state.selected;
        let card = cards[index];
        if (card.opened || card.locked) {
            return;
        }
        let attempt = this.state.attempt;
        card.opened = true;
        this.setState({ cards: cards });
        if (selected === null) {
            selected = {index: index, card: card};
        } else {
            if (selected.card.value !== card.value) {
                attempt += 1;
                let lh = selected.card;
                let rh = card;
                let self = this;
                setTimeout(function () {
                    lh.opened = false;
                    rh.opened = false;
                    self.setState({ cards: cards });
                    self.gameOver();
                }, 700);
            } else {
                this.gameOver();
            }
            selected = null;
        }
        this.setState({ selected: selected, attempt: attempt});
    }

    gameOver() {
        let i;
        let attempt = this.state.attempt;
        const cards = this.state.cards;
        let left = this.props.maxNumberOfAttempts - attempt;
        if (left <= 0) {
            for (i = 0; i < cards.length; i++) {
                cards[i].locked = true;
            }
            this.setState({ cards: cards});
        }
    }

    handleNewGameClick() {
        this.setState(this.newGame());
    }

    render() {
        const status = this.status();
        const cards = [];
        this.state.cards.forEach((card, index) => {
            cards.push(<Card key={index} index={index} card={card} onCardClick={this.handleCardClick}/>);
        });
        return (
            <div>
                <StatusBar status={status}/>
                <div className="board new-line">{cards}</div>
                <Button onButtonClick={this.handleNewGameClick}>New Game</Button>
                <Rules/>
            </div>
        );
    }

    status() {
        const maxNumberOfAttempts = this.props.maxNumberOfAttempts;
        const attempt = this.state.attempt;
        const cards = this.state.cards;
        const left = maxNumberOfAttempts - attempt;
        if (left <= 0) {
            return {message: 'You Loose...', level: 'error'};
        }
        for (let i = 0; i < cards.length; i++) {
            if (!cards[i].opened) {
                return {message: left + ' attempts left.', level: 'warning'};
            }
        }
        return {message: 'You Win!', level: 'success'};
    }
}