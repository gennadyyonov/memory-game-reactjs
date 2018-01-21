import React from 'react';
import DropDown from './DropDown.jsx';
import {CardType, Round} from "./Enums.jsx";

export default class NewGame extends React.Component {

    constructor(props) {
        super(props);

        this.state = {cardType: props.cardType, round: props.round};

        this.handleClick = this.handleClick.bind(this);
        this.handleCardTypeChange = this.handleCardTypeChange.bind(this);
        this.handleRoundChange = this.handleRoundChange.bind(this);
    }

    handleClick() {
        this.props.onButtonClick(this.state.cardType, this.state.round);
    }

    handleCardTypeChange(cardType) {
        this.setState({cardType: cardType});
    }

    handleRoundChange(round) {
        this.setState({round: round});
    }

    render() {
        return (
            <div className="new-line">
                <DropDown clazz="playing-card-selection" enumType={CardType}
                          selected={this.state.cardType} onDownChange={this.handleCardTypeChange}/>
                <DropDown clazz="round-selection" enumType={Round}
                          selected={this.state.round} onDownChange={this.handleRoundChange}/>
                <button className="button shadow-button" onClick={this.handleClick}>New Game</button>
            </div>
        );
    }
}