import React from 'react';
import ArrayUtils from './ArrayUtils.jsx';
import StatusBar from './StatusBar.jsx';
import Card from './Card.jsx';
import PlayingCard from './PlayingCard.jsx';
import NewGame from './NewGame.jsx';
import Rules from './Rules.jsx';
import {CardType, Level, Round} from './Enums.jsx';
import Settings from './Settings.jsx';

export default class Board extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.newGame(props.cardType, props.round);

        this.handleCardClick = this.handleCardClick.bind(this);
        this.handleNewGameClick = this.handleNewGameClick.bind(this);
    }

    newGame(cardType, round) {
        const cards = this.initCards(cardType, round);
        return {cards: cards, attempt: 0, selected: null, cardType: cardType, round: round};
    }

    initCards(cardType, round) {
        const values = this.randomValues(cardType, round);
        let cards = [];
        for (let i = 0; i < values.length; i++) {
            let card = {value: values[i], opened: false, locked: false};
            cards.push(card);
        }
        return cards;
    }

    randomValues(cardType, round) {
        const pairs = round.pairs;
        let values = [];
        for (let i = 0; i < pairs; i++) {
            const value = Settings.isPlayingCard(cardType) ? PlayingCard.randomCardImage() : i;
            values.push(value);
            values.push(value);
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
        let left = this.state.round.maxNumberOfAttempts - attempt;
        if (left <= 0) {
            for (i = 0; i < cards.length; i++) {
                cards[i].locked = true;
            }
            this.setState({ cards: cards});
        }
    }

    handleNewGameClick(cardType, round) {
        this.setState(this.newGame(cardType, round));
    }

    render() {
        const status = this.status();
        const cards = [];
        const cardType = this.state.cardType;
        const playingCard = Settings.isPlayingCard(cardType);
        this.state.cards.forEach((card, index) => {
            let item = (playingCard) ?
                <PlayingCard key={index} index={index} card={card} onCardClick={this.handleCardClick}/> :
                <Card key={index} index={index} card={card} onCardClick={this.handleCardClick}/>;
            cards.push(item);
        });
        return (
            <div>
                <StatusBar status={status}/>
                <div className="board new-line">{cards}</div>
                <NewGame cardType={cardType} round={this.state.round} onButtonClick={this.handleNewGameClick}/>
                <Rules level={Level.INFO}/>
            </div>
        );
    }

    status() {
        const maxNumberOfAttempts = this.state.round.maxNumberOfAttempts;
        const attempt = this.state.attempt;
        const cards = this.state.cards;
        const left = maxNumberOfAttempts - attempt;
        if (left <= 0) {
            return {message: 'You Loose...', level: Level.ERROR};
        }
        for (let i = 0; i < cards.length; i++) {
            if (!cards[i].opened) {
                return {message: left + ' attempts left.', level: Level.WARNING};
            }
        }
        return {message: 'You Win!', level: Level.SUCCESS};
    }
}

Board.defaultProps = {
    cardType: CardType.NUMBER,
    round: Round.ROUND_1
};