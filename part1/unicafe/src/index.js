import React, { useState } from "react";
import ReactDOM from "react-dom";

const Stats = (props) => {
  return (
    <>
      <h2>Statistics</h2>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.all}</p>
      <p>Average: {props.avg / props.all}</p>
      <p>Positive: {(props.good / props.all) * 100}%</p>
    </>
  );
};

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
      <Stats good={good} bad={bad} neutral={neutral} all={all} avg={avg} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
