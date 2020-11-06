import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 });

  const handleClick = () => {
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
      <h1>Anecdote of the Day:</h1>
      <p>
        [{selected + 1}] {props.anecdotes[selected]}
      </p>
      <p>has {points[selected]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleClick}>Next Anecdote!</button>
      <h2>Anecdote with the most votes:</h2>
      <p>
        [{parseInt(mostPoints) + 1}] {props.anecdotes[mostPoints]}
      </p>
      <p>has {points[mostPoints]} votes</p>
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
