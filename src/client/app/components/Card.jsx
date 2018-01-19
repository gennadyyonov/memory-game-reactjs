import React from 'react';

export default class Card extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.onCardClick(event.target.id);
    }

    render() {
        const card = this.props.card;
        const clazz = card.opened ? 'open' : 'close';
        const value = card.opened ? card.value : '';
        return (
            <div id={this.props.index} className={'card ' + clazz} onClick={this.handleClick}>{value}</div>
        );
    }
}