import React, { useState } from 'react';
import Navbar from '../components/Navbar';
const api = {
  key: process.env.REACT_APP_key,
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
      <Navbar/>
      <main>
        <div className="search-box">
          {/* <input 
            type="text"
            className="search-bar"
            placeholder="Ex: Toronto"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          /> */}
          <input type="text" onKeyPress={search} value={query} onChange={e => setQuery(e.target.value)} placeholder="Ex: Toronto" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative text-white bg-black bg-black rounded text-md border-0 shadow outline-none focus:outline-none w-full"/>

        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      <div className="mb-3 pt-0">
      </div>

      </main>
    </div>
  );
}

export default App;