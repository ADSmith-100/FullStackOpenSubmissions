import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const LocalWeather = (props) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const dataHook = () => {
      axios
        .get(
          `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&&query=${props.city}`,
          { cancelToken: source.token }
        )
        .then((response) => {
          setWeather(response.data);
        });
    };
    dataHook();
    return () => {
      source.cancel();
    };
  }, [props.city]);

  return weather ? (
    <div>
      <h3>Weather in {props.city}:</h3>
      <p>
        <strong>Temp:</strong> {weather.current.temperature} Celsius
      </p>
      <img
        src={weather.current.weather_icons[0]}
        alt="weather for current country"
      />
      <p>
        <strong>{weather.current.weather_descriptions[0]}</strong>
      </p>
      <p>
        <strong>Wind speed:</strong> {weather.current.wind_speed} mph,{" "}
        <strong>Direction: </strong> {weather.current.wind_dir}
      </p>
      <p>
        <strong>Local Time is: </strong> {weather.location.localtime}
      </p>
    </div>
  ) : (
    ""
  );
};

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
      <LocalWeather city={country.capital} />
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
