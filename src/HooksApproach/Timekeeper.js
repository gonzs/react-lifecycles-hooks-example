import React, { useState, useEffect, useRef } from "react";

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
    <div>
      <h2>
        {minutes}:{seconds}:{miliseconds}
      </h2>
      <button onClick={() => setDelay(10)}>Start</button>
      <button onClick={() => setDelay(null)}>Stop</button>
      <button
        onClick={() => {
          setMiliseconds(0);
          setSeconds(0);
          setMinutes(0);
        }}
      >
        Refresh
      </button>
    </div>
  );
};
export default TimekeeperHooks;
