import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
const api = {
  key: process.env.REACT_APP_key,
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = () => {
    // if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=pt_br`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          // setQuery('');
          console.log(result);
        });
    // }
  }

  const dateBuilder = (d) => {
    let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let days = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} de ${month} de ${year}`
  }

  return (
    <div className="app">
      <Navbar/>
      <main>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Ex: Toronto" className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"/>
          <button onClick={search} className="flex-shrink-0 border-transparent border-4 text-white hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
              Procurar
            </button>
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp weather-text">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather weather-txt">{weather.weather[0].description}</div>
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