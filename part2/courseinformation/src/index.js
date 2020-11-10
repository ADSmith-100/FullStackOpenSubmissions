import React from "react";
import ReactDOM from "react-dom";
// import Course from "./Course/";

const Header = ({ course }) => {
  return <h2>{course.name}</h2>;
};

const Total = (props) => {
  let totes = props.course.parts.reduce((a, b) => a + b.exercises, 0);

  return (
    <strong>
      <p>Total exercises: {totes} </p>
    </strong>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part.name}: {props.part.exercises}
    </p>
  );
};

const Content = ({ course }) => {
  const courseParts = course.parts.map((part, i) => (
    <Part part={course.parts[i]} key={course.parts[i].id} />
  ));

  return <div>{courseParts}</div>;
};

const Course = (props) => {
  return (
    <>
      <Header course={props.course} />
      <Content course={props.course} part={props.part} />
      <Total course={props.course} />
    </>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  const allCourses = courses.map((c, i) => (
    <Course course={courses[i]} key={courses[i].id} />
  ));

  return (
    <>
      <h1>Web Development Curriculum</h1>
      <div>{allCourses}</div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
