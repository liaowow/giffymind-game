import React, { Component } from 'react';
import Checker from './Checker';
import SquareContainer from './SquareContainer';

export default class Chance extends Component {

    state = {
        completeArr: []
    }
    
    userInput = (newArr) => {
        // console.log(newArr)
        this.setState({
            completeArr: newArr
        })
    }

    render() {
        // console.log(this.state.allSquaresFilled)
        return (
            <div className="row">
                <div className="column left">
                    <SquareContainer userInput={this.userInput}/>
                </div>
                <div className="column right">
                    <Checker handleTimerStop={this.props.handleTimerStop} 
                             correctAns={this.props.correctAns} 
                             completeArr={this.state.completeArr} 
                             addAttempts={this.props.addAttempts} 
                             numOfAttempts={this.props.numOfAttempts} 
                             handleOutcome={this.props.handleOutcome}
                             handleWinning={this.props.handleWinning} /> 
                </div>
            </div>

        )
    }
}
