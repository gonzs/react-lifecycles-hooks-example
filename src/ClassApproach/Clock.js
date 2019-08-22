import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

class ClockClass extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  moveSec() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.moveSec(), 1000);
  }

  componentWillUnmount() {}

  render() {
    const time = this.state.date.toLocaleTimeString();

    return (
      <Jumbotron>
        <h2>{time}</h2>{" "}
      </Jumbotron>
    );
  }
}
export default ClockClass;
