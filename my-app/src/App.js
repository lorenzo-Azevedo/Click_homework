import React, { Component } from "react";
import Score from "./components/score";
import monkey from "./monkey.json";
import FriendCard from "./components/monkeys";


class App extends Component {
  state = {
    monkey,
    clickedMonkey: [],
    score: 0
  };

  imageClick = event => {
    const currentMonkey = event.target.alt;
    const MonkeyAlreadyClicked =
      this.state.clickedMonkey.indexOf(currentMonkey) > -1;

    if (MonkeyAlreadyClicked) {
      this.setState({
        Monkey: this.state.monkey.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedMonkey: [],
        score: 0
      });
        alert("EW...Bye?");

    } else {
      this.setState(
        {
          monkey: this.state.monkey.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedMonkey: this.state.clickedMonkey.concat(
            currentMonkey
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            alert("Bam!");
            this.setState({
              monkey: this.state.monkey.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedMonkey: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Score 
          score={this.state.score}
        />
        <div className="wrapper">
          {this.state.monkey.map(monkey => (
            <FriendCard
              imageClick={this.imageClick}
              id={monkey.id}
              key={monkey.id}
              image={monkey.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;