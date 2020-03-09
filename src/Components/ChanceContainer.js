import React, { Component } from 'react';
import Chance from './Chance';


export default class ChanceContainer extends Component {

  render() {
    console.log(this.props.correctAns)
    return (
    <div className="main_panel">
        < Chance handleWinning={this.props.handleWinning} correctAns={this.props.correctAns} addAttempts={this.props.addAttempts} handleOutcome={this.props.handleOutcome} handleTimerStop={this.props.handleTimerStop}/>
        < Chance handleWinning={this.props.handleWinning} correctAns={this.props.correctAns} addAttempts={this.props.addAttempts} handleOutcome={this.props.handleOutcome} handleTimerStop={this.props.handleTimerStop}/>
        < Chance handleWinning={this.props.handleWinning} correctAns={this.props.correctAns} addAttempts={this.props.addAttempts} handleOutcome={this.props.handleOutcome} handleTimerStop={this.props.handleTimerStop}/>
        < Chance handleWinning={this.props.handleWinning} correctAns={this.props.correctAns} addAttempts={this.props.addAttempts} handleOutcome={this.props.handleOutcome} handleTimerStop={this.props.handleTimerStop}/>
        < Chance handleWinning={this.props.handleWinning} correctAns={this.props.correctAns} addAttempts={this.props.addAttempts} handleOutcome={this.props.handleOutcome} handleTimerStop={this.props.handleTimerStop}/>
        < Chance handleWinning={this.props.handleWinning} correctAns={this.props.correctAns} addAttempts={this.props.addAttempts} handleOutcome={this.props.handleOutcome} handleTimerStop={this.props.handleTimerStop}/>
        < Chance handleWinning={this.props.handleWinning} correctAns={this.props.correctAns} addAttempts={this.props.addAttempts} handleOutcome={this.props.handleOutcome} handleTimerStop={this.props.handleTimerStop}/>
        < Chance handleWinning={this.props.handleWinning} correctAns={this.props.correctAns} addAttempts={this.props.addAttempts} handleOutcome={this.props.handleOutcome} handleTimerStop={this.props.handleTimerStop}/>
        < Chance handleWinning={this.props.handleWinning} correctAns={this.props.correctAns} addAttempts={this.props.addAttempts} handleOutcome={this.props.handleOutcome} handleTimerStop={this.props.handleTimerStop}/>
        < Chance handleWinning={this.props.handleWinning} correctAns={this.props.correctAns} addAttempts={this.props.addAttempts} handleOutcome={this.props.handleOutcome} handleTimerStop={this.props.handleTimerStop}/>
    </div>
    );
  }
}
