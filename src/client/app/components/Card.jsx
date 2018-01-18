import React from 'react';

export default class Card extends React.Component {

    render() {
        const card = this.props.card;
        const clazz = card.opened ? 'open' : 'close';
        const value = card.opened ? card.value : '';
        return (
            <div className={'card ' + clazz}>{value}</div>
        );
    }
}