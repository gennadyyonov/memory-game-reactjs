import React from 'react';

export default class Rules extends React.Component {

    render() {
        return (
            <div className={this.props.level.value}>
                <strong>The rules for playing Memory Game</strong>
                <ul>
                    <li>Cards are mixed up and laid in rows, face down.</li>
                    <li>Turn over any two cards.</li>
                    <li>If the two cards match, keep them.</li>
                    <li>If they don't match, turn them back over.</li>
                    <li>Remember what was on each card and where it was.</li>
                    <li>The game is over either when all the cards have been matched or number of attempts exceeded.
                    </li>
                </ul>
            </div>
        );
    }
}