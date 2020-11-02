import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]} />
      <Total
        exercises1={parts[0].exercises}
        exercises2={parts[1].exercises}
        exercises3={parts[2].exercises}
      />
    </div>
  );
};

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};
const Content = (props) => {
  return (
    <>
      <Part1 exercises1={props.exercises1} part1={props.part1} />
      <Part2 exercises2={props.exercises2} part2={props.part2} />
      <Part3 exercises3={props.exercises3} part3={props.part3} />
    </>
  );
};

const Part1 = (props) => {
  return (
    <>
      <p>
        {props.part1.name} {props.part1.exercises}
      </p>
    </>
  );
};

const Part2 = (props) => {
  return (
    <>
      <p>
        {props.part2.name} {props.part2.exercises}
      </p>
    </>
  );
};
const Part3 = (props) => {
  return (
    <>
      <p>
        {props.part3.name} {props.part3.exercises}
      </p>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
