import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export default class Rules extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
      render() {
    
        return (
          <div className="somespace">
            <Button variant="info" size="lg" onClick={this.handleShow}>
              Game Rules
            </Button>
    
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Game Rules</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                At the beginning of each game the computer generates a secret code of four gifs. The gifs are always chosen from the same eight gifs. Duplicates are allowed, so the computer could even choose the same gif four times.
                </p>
                <p>
                Your objective is to guess the secret code. You will have to guess the gif and put them in the same order as they are in the secret code.
                </p>
                <p>
                Choose four gifs in the next available row and then click on the Check button. The computer will score your guess in the following way:
                </p>
                <ul>
                    <li>
                      For each guess that is right in both gif and position you get a green point
                    </li>
                    <li>
                      For each guess that is right in gif but not in position you get a yellow point
                    </li>
                    <li>
                      For each guess that is wrong you get a white point
                    </li>
                </ul>
                <p>
                You have ten chances to make your guesses, if you exhaust all of them without guessing the code, you lose the game.
                </p>
                <p> Good Luck!</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="info" onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
    }
}
    