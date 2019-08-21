import React, { useState, useEffect, useRef } from "react";

const ClockHooks = () => {
  const timerID = useRef(null);
  const [date, setDate] = useState(new Date());

  const moveSec = () => {
    setDate(new Date());
  };

  useEffect(() => {
    timerID.current = setInterval(() => moveSec(), 1000);
  }, []);

  return <h2>{date.toLocaleTimeString()}</h2>;
};
export default ClockHooks;
