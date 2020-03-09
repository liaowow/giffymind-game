import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Rules from './Rules'
import ScoreBoard from './ScoreBoard';

export default class Menu extends Component {

    render() {
        return (
            <div className="menu">
                <ButtonToolbar>
                    <Rules/>
                    <ScoreBoard/>
                    <Button onClick={this.props.handleUserClick} variant="dark" size="lg">Log Out</Button>
                </ButtonToolbar>
                <br />
            </div>
        )
    }
}
