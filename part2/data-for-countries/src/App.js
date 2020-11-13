import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const SelectedCountry = (props) => {
  return props.filteredData.map((country) => (
    <div key={country.name}>
      <h2>{country.name}</h2>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <br></br>
      <h2>Languages:</h2>
      {props.filteredData[0].languages.map((lang, i) => (
        <ul key={i}>
          <li>{lang.name}</li>
        </ul>
      ))}
      <img src={props.filteredData[0].flag} alt="flag of filtered country" />
    </div>
  ));
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchName, setNewSearchName] = useState("");

  const handleSearchNameChange = (event) => {
    setNewSearchName(event.target.value);
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const filteredData = countries.filter((country) =>
    country.name.toLowerCase().includes(searchName.toLowerCase())
  );

  const showSelectedCountry = (event) => {
    setNewSearchName(event.target.value);
  };

  const CountryData = (props) => {
    if (props.filteredData.length > 10) {
      return <p>Too many matches, please specify another filter</p>;
    } else if (
      props.filteredData.length < 10 &&
      props.filteredData.length > 1
    ) {
      return props.filteredData.map((country) => (
        <ul key={country.name}>
          <li>
            {country.name}{" "}
            <button onClick={showSelectedCountry} value={country.name}>
              show
            </button>
          </li>
        </ul>
      ));
    } else {
      return <SelectedCountry filteredData={filteredData} />;
    }
  };
  return (
    <div>
      <h1>Country Data!</h1>
      Look up countries:{" "}
      <input value={searchName} onChange={handleSearchNameChange}></input>
      <div>
        <CountryData filteredData={filteredData} />
      </div>
    </div>
  );
};

export default App;
