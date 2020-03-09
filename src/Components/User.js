import React, { Component } from 'react';
import Game from './Game';
import Menu from './Menu'
import Button from 'react-bootstrap/Button';

export default class User extends Component {

    state = {
        username: "",
        correctAns: [],
        user: {},
        userGameInstance: {},
        clicked: false
    }

    handleChange = e => {
        let userInput = e.target.value

        this.setState ({ username: userInput})
    }


    handleUserClick = () => {
        // console.log(this.state.username)
        fetch(`https://giffymind.herokuapp.com/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({username: this.state.username})
        })
        .then(r => r.json())
        .then(resp => {
            // console.log("response from fetch:", resp)
            this.setState({
            username: resp.user.username,
            correctAns: resp.correct,
            user: resp.user,
            userGameInstance: resp.game
        })})

        this.setState({ 
            clicked:!this.state.clicked
        })
    }

    // update game instance with new playtime
    handleGamePlaytimeUpdate = (updatedPlaytime) => {
        // console.log(updatedPlaytime)
        this.setState({
            userGameInstance: {
                ...this.state.userGameInstance,
                ...this.state.userGameInstance.playtime,
                playtime: updatedPlaytime
            } 
        }, () => {
            fetch(`https://giffymind.herokuapp.com/games/${this.state.userGameInstance.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({game: this.state.userGameInstance})
            })
            .then(r => r.json())
        })

        
    }

    // update # of attempts
    handleGameAttemptsUpdate = (updatedAttempts) => {
        this.setState({
            userGameInstance: {
                ...this.state.userGameInstance,
                ...this.state.userGameInstance.attempts,
                attempts: updatedAttempts
            } 
        }, () => {
            fetch(`https://giffymind.herokuapp.com/games/${this.state.userGameInstance.id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({game: this.state.userGameInstance})
            })
            .then(r => r.json())

        })

    }

    render() {
        console.log("Correct Answer:", this.state.correctAns)
        console.log("State in render:", this.state)
        if(this.state.clicked){
            return(
                <div className="centercontainer">
                    <h1 className="funfont">GIFFYMind</h1>
                    < Menu handleUserClick={this.handleUserClick}/>
                    <br />
                    <Game user={this.state.user} 
                          userGameInstance={this.state.userGameInstance} 
                          correctAns={this.state.correctAns} 
                          handleUserClick={this.handleUserClick}
                          handleGamePlaytimeUpdate={this.handleGamePlaytimeUpdate}
                          handleGameAttemptsUpdate={this.handleGameAttemptsUpdate}
                          handleGameUpdate={this.handleGameUpdate}/>
                </div>
            )
        }



        return (
            <div className="centercontainer">
                <h1 className="funfont">GIFFYMind</h1>
                <h3>Enter your username:</h3>
                <br />
                <input type="text" placeholder="" value={this.state.username} onChange={this.handleChange}/>
                <br />
                <br />
                <Button variant="dark" type="submit" onClick={this.handleUserClick}>Go!</Button>
            </div>
        )
    }
}
