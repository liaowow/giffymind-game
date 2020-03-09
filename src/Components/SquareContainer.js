import React, { Component } from 'react';
import Square from './Square';
import Row from 'react-bootstrap/Row'

export default class SquareContainer extends Component {

    state = {
        squareArray: []
    }

    squareIsFilled = (squareUrl) => {
        // console.log(squareUrl)
        this.setState({squareArray: [...this.state.squareArray, squareUrl]},
        () => this.props.userInput(this.state.squareArray))
    }



    render() {
        return (
        <Row>  
            <Square key="first_square" squareIsFilled={this.squareIsFilled} />
            <Square key="second_square" squareIsFilled={this.squareIsFilled}/>
            <Square key="third_square" squareIsFilled={this.squareIsFilled}/>
            <Square key="fourth_square" squareIsFilled={this.squareIsFilled}/>
        </Row>
        );
    }
}
