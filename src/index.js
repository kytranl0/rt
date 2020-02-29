//Start: Must import or app fail. 
import React from 'react';
import ReactDOM from 'react-dom';
//End
import './index.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {ele: 'YOYOYO'};
        this.activateQuan = this.activateQuan.bind(this);
    }

    activateQuan() {
        this.setState(state => ({
            ele: state.ele + 'YOYOYO'   
        }));
    }

    render() {
        return (
            //css ref
            <div className="game">
                <h1 onClick={this.activateQuan}>{this.state.ele}</h1>
            </div>
        );
    }
}

// We can reference the Game component here
ReactDOM.render(
    <Game />,
    document.getElementById('root')
);