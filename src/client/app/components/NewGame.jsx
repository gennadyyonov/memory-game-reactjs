import React from 'react';

export default class NewGame extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onButtonClick();
    }

    render() {
        return (
            <div className="new-line">
                <button className="button shadow-button" onClick={this.handleClick}>New Game</button>
            </div>
        );
    }
}