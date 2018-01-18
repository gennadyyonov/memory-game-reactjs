import React from 'react';
import {render} from 'react-dom';
import Board from './components/Board.jsx';

class MemoryGame extends React.Component {

    render() {
        return (
            <Board cards={this.props.cards} maxNumberOfAttempts={10} attempt={0}/>
        );
    }
}

const CARDS = [
    {value: 0, opened: false, locked: false},
    {value: 0, opened: false, locked: false},
    {value: 1, opened: true, locked: false},
    {value: 1, opened: true, locked: false},
    {value: 2, opened: false, locked: false},
    {value: 2, opened: false, locked: false},
    {value: 3, opened: false, locked: false},
    {value: 3, opened: false, locked: false}
];

render(<MemoryGame cards={CARDS}/>, document.getElementById('container'));