//Start: Must import or app fail. 
import React from 'react';
import ReactDOM from 'react-dom';
//End
import './index.css';
class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 1
        };
        this.activateQuan = this.activateQuan.bind(this);
    }
    activateQuan() {
        this.setState(state => ({
            val: state.val + 1
        }));
    }
    render() {
        return (
            <button onClick={this.activateQuan} className="square">{this.state.val}</button>
        )
    }
}
class Game extends React.Component {
    render() {
        return (
            //css ref
            <div className="game">
                <div className="board-row">
                    <Square></Square>
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