import React, { useState } from "react";
import ReactDOM from "react-dom";

const AMostV = (props) => {
  return (
    <>
      <h2>Anecdote with the most votes:</h2>
      <p>
        [{parseInt(props.mostPoints) + 1}] {props.anecdotes[props.mostPoints]}
      </p>
      <p>has {props.points[props.mostPoints]} votes</p>
    </>
  );
};

const AOfDay = (props) => {
  return (
    <>
      <h1>Anecdote of the Day:</h1>
      <p>
        [{props.selected + 1}] {props.anecdotes[props.selected]}
      </p>
      <p>has {props.points[props.selected]} votes</p>
    </>
  );
};

const Button = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.text}</button>
    </>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });

  const handleNext = () => {
    setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)));
  };

  const handleVote = () => {
    const runningVote = { ...points };
    runningVote[selected] += 1;
    setPoints(runningVote);
  };

  let mostPoints = Object.keys(points).reduce((a, b) =>
    points[a] > points[b] ? a : b
  );

  return (
    <div>
      <AOfDay selected={selected} anecdotes={anecdotes} points={points} />
      <Button handleClick={handleVote} text="Vote" />
      <Button handleClick={handleNext} text="Next Anecdote!" />
      <AMostV mostPoints={mostPoints} points={points} anecdotes={anecdotes} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
