import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
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
    ],
  };
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  );
};
const Content = (props) => {
  return (
    <>
      <Part1 parts={props.parts[0]} />
      <Part2 parts={props.parts[1]} />
      <Part3 parts={props.parts[2]} />
    </>
  );
};

const Part1 = (props) => {
  return (
    <>
      <p>
        {props.parts.name} {props.parts.exercises}
      </p>
    </>
  );
};

const Part2 = (props) => {
  return (
    <>
      <p>
        {props.parts.name} {props.parts.exercises}
      </p>
    </>
  );
};
const Part3 = (props) => {
  return (
    <>
      <p>
        {props.parts.name} {props.parts.exercises}
      </p>
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.parts[0].exercises +
          props.parts[1].exercises +
          props.parts[2].exercises}
      </p>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
