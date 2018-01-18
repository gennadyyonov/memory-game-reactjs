import React from 'react';

export default class Card extends React.Component {

    render() {
        const card = this.props.card;
        return (
            <div>{card.value}</div>
        );
    }
}