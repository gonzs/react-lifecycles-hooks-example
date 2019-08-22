import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <Jumbotron>
        <h1>{this.state.count}</h1>
        <Button
          variant="secondary"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Laps
        </Button>
      </Jumbotron>
    );
  }
}
export default CounterClass;
