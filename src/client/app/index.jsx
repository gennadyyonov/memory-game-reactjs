import React from 'react';
import {render} from 'react-dom';
import Board from './components/Board.jsx';

class MemoryGame extends React.Component {

    render() {
        return (
            <Board/>
        );
    }
}

render(<MemoryGame/>, document.getElementById('container'));