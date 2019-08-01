import React, { Component } from 'react';
import PlayerChoice from './PlayerChoice';
import rockImage from './images/rock.jpg';
import paperImage from './images/paper.jpg';
import scissorsImage from './images/scissors.jpg';
import './App.css';

const CHOICES_ENUM = ['rock', 'paper', 'scissors'];

class RockPaperScissors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerScore: 0,
      computerScore: 0
    };
    this.handleClickReset = this.handleClickReset.bind(this);
    this.handleClickChoice = this.handleClickChoice.bind(this);
  }

  handleClickReset() {
    // console.log('CLICKED', this);
    // this.state.playerScore = 0; WRONG
    this.setState({
      playerScore: 0,
      computerScore: 0
    });
  }

  handleClickChoice(playerChoice) {
    const randomNum = Math.floor(Math.random() * 3);
    const computerChoice = CHOICES_ENUM[randomNum];
    if (playerChoice === computerChoice) {
      console.log("tie!");
      return;
     }
    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      this.setState({ playerScore: this.state.playerScore + 1 });
      console.log("Player scored a point!");
    } else {
      this.setState({ computerScore: this.state.computerScore + 1 });
      console.log("Computer scored a point!");
    }
  }

  componentDidUpdate() {
    if (this.state.playerScore >= 5) {
      alert('Player won!');
    } else if (this.state.computerScore >= 5) {
      alert('Computer won!');
    }
  }

  render() {
    return (
      <div className="App">
        <div className="RPS2">
        Click on rock, paper, or scissors. First to 5 wins! <br /> <br />
          Player: {this.state.playerScore} <br/>
          Computer: {this.state.computerScore}
        </div>
        <div>
          <PlayerChoice
            name="rock"
            imageSrc={rockImage}
            onClick={this.handleClickChoice}
          />
          <PlayerChoice
            name="paper"
            imageSrc={paperImage}
            onClick={this.handleClickChoice}
          />
          <PlayerChoice
            name="scissors"
            imageSrc={scissorsImage}
            onClick={this.handleClickChoice}
          />
        </div>

        <button onClick={this.handleClickReset}>Reset</button>
      </div>
    );
  }
}

export default RockPaperScissors;
