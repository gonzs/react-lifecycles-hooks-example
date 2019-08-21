import React, { useState } from "react";

const CounterHooks = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Laps</button>
    </div>
  );
};
export default CounterHooks;
