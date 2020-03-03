//Start: Must import or app fail. 
import React from 'react';
import ReactDOM from 'react-dom';
//End
import './index.css';
class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={() => this.props.onClickk()}>{this.props.value}</button>
        )
    }
}
class Game extends React.Component {
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
            //We are passing value and onClickk props
            <div className="game">
                <div className="board-row">
                    <Square 
                    value={this.state.val} 
                    onClickk={() => this.activateQuan()} />
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