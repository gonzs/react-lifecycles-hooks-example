import React, { Component } from "react";

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

    return <h2>{time}</h2>;
  }
}
export default ClockClass;
