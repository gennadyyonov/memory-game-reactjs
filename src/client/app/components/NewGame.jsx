import React from 'react';
import Settings from './Settings.jsx';

export default class NewGame extends React.Component {

    constructor(props) {
        super(props);

        this.state = {cardType: props.cardType};

        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        this.props.onButtonClick(this.state.cardType);
    }

    handleChange(event) {
        const cardType = Settings.getCardTypeByValue(event.target.value);
        this.setState({cardType: cardType});
    }

    render() {
        const cardTypes = Settings.cardTypeOptions();
        return (
            <div className="new-line">
                <div className="mainselection playing-card-selection">
                    <label>
                        <select value={this.state.cardType.value} onChange={this.handleChange}>
                            {cardTypes}
                        </select>
                    </label>
                </div>
                <button className="button shadow-button" onClick={this.handleClick}>New Game</button>
            </div>
        );
    }
}