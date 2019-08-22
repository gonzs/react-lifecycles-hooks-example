import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

class TimekeeperClass extends Component {
  constructor(props) {
    super(props);
    this.state = { minutes: 0, seconds: 0, miliseconds: 0 };
  }

  start = () => {
    this.timerID = setInterval(() => {
      this.moveSec();
    }, 10);
  };

  moveSec() {
    this.setState((state, props) => {
      let milisec;
      let sec;
      let min;

      if (state.miliseconds === 99) {
        milisec = 0;
        sec = state.seconds + 1;

        if (state.seconds === 59) {
          sec = 0;
          min = state.minutes + 1;

          return { minutes: min, seconds: sec, miliseconds: milisec };
        } else {
          return { seconds: sec, miliseconds: milisec };
        }
      } else {
        milisec = state.miliseconds + 1;

        return { miliseconds: milisec };
      }
    });
  }

  stop = () => {
    clearInterval(this.timerID);
  };

  refresh = () => {
    clearInterval(this.timerID);
    this.setState({ minutes: 0, seconds: 0, miliseconds: 0 });
  };

  render() {
    const minutes = this.state.minutes;
    const seconds = this.state.seconds;
    const miliseconds = this.state.miliseconds;
    return (
      <Jumbotron>
        <h2>
          {minutes}:{seconds}:{miliseconds}
        </h2>
        <Button variant="success" onClick={this.start}>
          Start
        </Button>
        <Button variant="danger" onClick={this.stop}>
          Stop
        </Button>
        <Button variant="secondary" onClick={this.refresh}>
          Refresh
        </Button>
      </Jumbotron>
    );
  }
}
export default TimekeeperClass;
