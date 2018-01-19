import React from 'react';
import {render} from 'react-dom';
import Board from './components/Board.jsx';

class MemoryGame extends React.Component {

    render() {
        return (
            <Board pairs={4} maxNumberOfAttempts={10} attempt={0}/>
        );
    }
}

render(<MemoryGame/>, document.getElementById('container'));