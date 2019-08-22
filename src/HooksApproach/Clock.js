import React, { useState, useEffect, useRef } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const ClockHooks = () => {
  const timerID = useRef(null);
  const [date, setDate] = useState(new Date());

  const moveSec = () => {
    setDate(new Date());
  };

  useEffect(() => {
    timerID.current = setInterval(() => moveSec(), 1000);
  }, []);

  return (
    <Jumbotron>
      {" "}
      <h2>{date.toLocaleTimeString()}</h2>{" "}
    </Jumbotron>
  );
};
export default ClockHooks;
