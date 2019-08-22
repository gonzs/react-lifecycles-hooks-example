import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

const TimekeeperHooks = () => {
  const [miliseconds, setMiliseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [delay, setDelay] = useState(null);

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }

      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    if (miliseconds === 99) {
      setMiliseconds(0);
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setSeconds(0);
        setMinutes(minutes + 1);
      }
    } else {
      setMiliseconds(miliseconds + 1);
    }
  }, delay);

  return (
    <Jumbotron>
      <h2>
        {minutes}:{seconds}:{miliseconds}
      </h2>
      <Button variant="success" onClick={() => setDelay(10)}>
        Start
      </Button>
      <Button variant="danger" onClick={() => setDelay(null)}>
        Stop
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          setMiliseconds(0);
          setSeconds(0);
          setMinutes(0);
        }}
      >
        Refresh
      </Button>
    </Jumbotron>
  );
};
export default TimekeeperHooks;
