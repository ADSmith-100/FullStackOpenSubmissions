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

export default Course;
