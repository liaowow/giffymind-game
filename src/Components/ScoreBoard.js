import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default class ScoreBoard extends Component {
  constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
        games: []
      };
  }
  
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentDidMount(){
    fetch("https://giffymind.herokuapp.com/games")
    .then(r => r.json())
    .then(games => {
      this.setState({
        games
      })
    })
  }  

  renderUserScores = () => {

    return this.state.games.map(game => {

      let minutes = Math.floor(game.playtime / 60)
      let seconds = game.playtime % 60
      let stringifyTime = `${minutes}:${seconds}`
      
      if (game.attempts >= 1) {
        return (
          <tr>
            <td>{game.status ? "Won" : "Lost"}</td>
            <td>{game.user.username}</td>
            <td>{game.attempts}</td>
            <td>{stringifyTime}</td>
          </tr>
        )

      }

    })
  }
  
  render() {

    return (
      <div className="somespace">
        <Button variant="light" size="lg" onClick={this.handleShow}>
          Scoreboard
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Scoreboard</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped bordered condensed="true" hover>
              <thead>
                <tr>
                  <th>Result</th>
                  <th>Username</th>
                  <th># of Attempts</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {this.renderUserScores()}
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
