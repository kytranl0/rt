//Start: Must import or app fail. 
import React from 'react';
import ReactDOM from 'react-dom';
//End
import './index.css';
class Square extends React.Component {
    render() {
        return (
            <button className="square">{this.props.value}</button>
        )
    }
}
class Game extends React.Component {
    render() {
        return (
            //css ref
            <div className="game">
                <div className="board-row">
                    <Square value={1}></Square>
                </div>
            </div>
        );
    }
}

// We can reference the Game component here
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);