import React from "react";
import "./App.css";
import ClockClass from "./ClassApproach/Clock";
import TimekeeperClass from "./ClassApproach/Timekeeper";
import CounterClass from "./ClassApproach/Counter";
import ClockHooks from "./HooksApproach/Clock";
import TimekeeperHooks from "./HooksApproach/Timekeeper";
import CounterHooks from "./HooksApproach/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClockClass />
        <TimekeeperClass />
        <CounterClass />
        <br />
        <ClockHooks />
        <TimekeeperHooks />
        <CounterHooks />
      </header>
    </div>
  );
}

export default App;
