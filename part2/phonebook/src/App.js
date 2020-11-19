import React, { useState, useEffect } from "react";
import personService from "./Services/Persons";
import "./App.css";
import AddForm from "./Components/AddForm";
import Filter from "./Components/Filter";
import PersonList from "./Components/PersonList";
import NotificationER from "./Components/NotificationER";
import NotificationOK from "./Components/NotificationOK";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [searchName, setNewSearchName] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [comfirmMessage, setComfirmMessage] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleRemove = (id, name) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      personService
        .remove(id)
        .then(() => {
          const newPeople = persons.filter((p) => p.id !== id);
          setPersons(newPeople);
        })
        .catch((error) => {
          setErrorMessage(`'${name}' was already removed from server`);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
          setPersons(persons.filter((p) => p.id !== id));
        });
    } else {
      alert("operation cancelled");
    }
  };

  const updatePerson = (id) => {
    const updatedPersonObj = {
      name: newName,
      number: newNum,
    };
    personService.update(id, updatedPersonObj).then((updatedPerson) => {
      const updatedPList = [...persons];
      updatedPList.splice(id - 1, 1, updatedPerson);
      setPersons(updatedPList);

      setComfirmMessage(`Number for ${newName} has been updated!`);
      setTimeout(() => {
        setComfirmMessage(null);
      }, 4000);
      setNewName("");
      setNewNum("");
    });
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
      number: newNum,
    };
    const personToUpdate = persons.filter((p) => p.name === newName);

    if (persons.find((person) => person.name === newName)) {
      window.confirm(
        `${newName} already exists in this phonebook! Want to replace the number?`
      )
        ? updatePerson(personToUpdate[0].id, newName)
        : alert("action cancelled");
    } else {
      personService.create(personObj).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setComfirmMessage(`${newName} has been added to the phonebook!`);
        setTimeout(() => {
          setComfirmMessage(null);
        }, 4000);
        setNewName("");
        setNewNum("");
      });
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
      {errorMessage !== null ? (
        <NotificationER message={errorMessage} />
      ) : (
        <NotificationOK message={comfirmMessage} />
      )}
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
      <div>
        <PersonList filteredData={filteredData} handleRemove={handleRemove} />
      </div>
    </div>
  );
};

export default App;
