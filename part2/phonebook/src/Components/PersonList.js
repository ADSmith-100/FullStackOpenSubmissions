import React from "react";
import Person from "./Person";

const PersonList = (props) => {
  return (
    <ul>
      {props.filteredData.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </ul>
  );
};

export default PersonList;
