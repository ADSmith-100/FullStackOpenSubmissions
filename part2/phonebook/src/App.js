import React, { useState } from "react";
import "./App.css";
import AddForm from "./Components/AddForm";
import Filter from "./Components/Filter";
import PersonList from "./Components/PersonList";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [searchName, setNewSearchName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
      number: newNum,
    };

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} already exists in this phonebook!`);
    } else {
      setPersons(persons.concat(personObj));
      setNewName("");
      setNewNum("");
    }
  };

  const handleSearchNameChange = (event) => {
    setNewSearchName(event.target.value);
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumChange = (event) => {
    setNewNum(event.target.value);
  };

  const filteredData = persons.filter((person) =>
    person.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter
          handleSearchNameChange={handleSearchNameChange}
          searchName={searchName}
        />
      </div>
      <br></br>
      <div>
        <AddForm
          addPerson={addPerson}
          newName={newName}
          handlePersonChange={handlePersonChange}
          newNum={newNum}
          handleNumChange={handleNumChange}
        />
      </div>
      <h2>Numbers</h2>
      <PersonList filteredData={filteredData} />
    </div>
  );
};

export default App;
