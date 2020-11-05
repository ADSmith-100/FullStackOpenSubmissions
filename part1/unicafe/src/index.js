import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  );
};

const StatsHeader = (props) => {
  const statsExist = props.value;
  // if (props.value > 0)
  return (
    <>{statsExist ? <h2>Statistics</h2> : <h2>Awaiting Feedback...</h2>}</>
  );
  // return (
  //   <>
  //     <h2>Awaiting Feedback...</h2>
  //   </>
  // );
};

const Stats = (props) => {
  if (props.val2 > 0)
    return (
      <>
        <tbody>
          <tr>
            <td>{props.text}</td>
            <td>
              {props.value}
              {props.perc}
            </td>
          </tr>
        </tbody>
      </>
    );
  return <></>;
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

      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <StatsHeader value={all} />
      <table>
        <Stats value={good} text="Good: " val2={all} />
        <Stats value={neutral} text="Neutral: " val2={all} />
        <Stats value={bad} text="Bad: " val2={all} />
        <Stats value={all} text="All: " val2={all} />
        <Stats value={avg / all} text="Average: " val2={all} />
        <Stats
          value={(good / all) * 100}
          perc={"%"}
          text="Positive: "
          val2={all}
        />
      </table>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
