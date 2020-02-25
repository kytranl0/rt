//Start: Must import or app fail. 
import React from 'react';
import ReactDOM from 'react-dom';
//End
import './index.css';
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <h1>Hello</h1>
            </div>
        );
    }
}

// ========================================
// We can reference the Game component here
ReactDOM.render(
    <Game />,
    // If line below is removed thn app crashes. 
    document.getElementById('root')
);