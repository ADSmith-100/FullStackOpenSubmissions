import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [avg, setAvg] = useState(0);

  const handleGoodClick = () => {
    setAll(all + 1);
    setAvg(avg + 1);
    setGood(good + 1);
  };

  const handleBadClick = () => {
    setAll(all + 1);
    setAvg(avg - 1);
    setBad(bad + 1);
  };

  const handleNeutralClick = () => {
    setAll(all + 1);
    setAvg(avg + 0);
    setNeutral(neutral + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {all}</p>
      <p>Average: {avg / all}</p>
      <p>Positive: {(good / all) * 100}%</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
