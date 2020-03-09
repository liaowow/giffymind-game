import React, { Component } from 'react';
import ChanceContainer from './ChanceContainer'
import Timer from './Timer'
import Button from 'react-bootstrap/Button';

export default class Game extends Component {

    state = {
        attempts: 0,
        won: 0
    }
    
    addAttempts = () => {
        this.setState({
            attempts: +this.state.attempts + 1
        }, () => this.props.handleGameAttemptsUpdate(this.state.attempts))
    }


    handleOutcome = () => {
        // resetting the game
        this.setState({
            attempts: 0
        })

        this.props.handleUserClick()
    }

    handleWinning = () => {
        this.setState({
            won: 1
        }, () => {
            this.props.userGameInstance.status = true
            fetch(`http://localhost:3000/games/${this.props.userGameInstance.id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({status: this.props.userGameInstance.status})
            })
            .then(r => r.json())

        })
    }

    render() {
        if (this.state.attempts >= 10 && this.state.won === 0) {

            return(
                <div>
                    <div id="dialog">
                      <div className="outcome"> <h1>You Lost! </h1> </div>
                      <Button onClick={this.handleOutcome}>Try Again!</Button>
                    </div>
                    <Timer user={this.props.user} 
                           userGameInstance={this.props.userGameInstance}
                           numOfAttempts={this.state.attempts}
                           handleGamePlaytimeUpdate={this.props.handleGamePlaytimeUpdate}
                           handleGameUpdate={this.props.handleGameUpdate}/>
                    <ChanceContainer handleWinning={this.handleWinning} 
                                     correctAns={this.props.correctAns} 
                                     handleUserClick={this.props.handleUserClick} 
                                     handleTimerStop={this.handleTimerStop} 
                                     addAttempts={this.addAttempts}/>
                </div>
            )
          }

        return (
            <div>
                <h6 className="funfontsm">New Game</h6>
                <Timer won={this.state.won} 
                       userGameInstance={this.props.userGameInstance}
                       numOfAttempts={this.state.attempts}
                       handleGamePlaytimeUpdate={this.props.handleGamePlaytimeUpdate}
                       handleGameUpdate={this.props.handleGameUpdate}/>
                <ChanceContainer handleWinning={this.handleWinning} 
                                 correctAns={this.props.correctAns} 
                                 handleUserClick={this.props.handleUserClick} 
                                 handleTimerStop={this.handleTimerStop} 
                                 addAttempts={this.addAttempts}
                                 handleOutcome={this.handleOutcome}/>
            </div>
        )
    }
}
