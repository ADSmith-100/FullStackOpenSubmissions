import React from "react";
import Person from "./Person";
import "../App.css";

const PersonList = (props) => {
  return (
    <>
      {props.filteredData.map((person) => (
        <div key={person.id}>
          <Person person={person} />{" "}
          <button
            className="remove"
            onClick={() => props.handleRemove(person.id, person.name)}
          >
            Remove
          </button>
          <br></br>
        </div>
      ))}
    </>
  );
};

export default PersonList;

//  {
//       "name": "Arto Hellas",
//       "number": "040-123456",
//       "id": 1
//     },
//     {
//       "name": "Ada Lovelace",
//       "number": "39-44-5323523",
//       "id": 2
//     },
//     {
//       "name": "Dan Abramov",
//       "number": "12-43-234345",
//       "id": 3
//     },
//     {
//       "name": "Mary Poppendieck",
//       "number": "39-23-6423122",
//       "id": 4
//     }
