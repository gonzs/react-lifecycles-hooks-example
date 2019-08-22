import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

const CounterHooks = () => {
  const [count, setCount] = useState(0);

  return (
    <Jumbotron>
      <h1>{count}</h1>
      <Button variant="secondary" onClick={() => setCount(count + 1)}>
        Laps
      </Button>
    </Jumbotron>
  );
};
export default CounterHooks;
