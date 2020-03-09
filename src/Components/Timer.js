import React, { Component } from 'react';

export default class Timer extends Component {

    state = {
        minutes: 0,
        seconds: 0,
        playedTime: 0
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            this.setState({
                seconds: seconds + 1
            })

            if (seconds === 59) {
                
                this.setState({
                    minutes: minutes + 1,
                    seconds: 0
                })
            }

        }, 1000)
        
    }

    // pause the timer && store user's play time
    componentDidUpdate (prevProps, prevState){

        if (this.props.numOfAttempts === 5 && prevProps.numOfAttempts === 4) {
            clearInterval(this.myInterval)
    
            let userPlayTime = (this.state.minutes * 60) + this.state.seconds
    
            this.setState({
                playedTime: userPlayTime
            })

        }

        if (this.props.won === 1 && prevProps.won === 0) {
            clearInterval(this.myInterval)
    
            let userPlayTime = (this.state.minutes * 60) + this.state.seconds
    
            this.setState({
                playedTime: userPlayTime
            })
        }

        if (this.state.playedTime !== prevState.playedTime) {
            // get user's latest game instance id
            console.log(this.props.userGameInstance)

            // add playtime to game instance
            this.props.handleGamePlaytimeUpdate(this.state.playedTime)
        }

    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds } = this.state
        return (
            <div>
                <h3 className="funfontsm">⏳ { minutes }: { seconds < 10 ? `0${seconds}` : seconds }</h3>
            </div>
        )
    }

}
