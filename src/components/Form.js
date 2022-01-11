import React, { useState } from 'react';
import { TextField, Typography, Button } from '@mui/material';
import Logo from '../assets/img/logo.png'
import { useStyles } from '../stylesheets/homeStyles';


function Form() {
    const classes = useStyles();

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [error, setError] = useState('');
    const api = {
        key: process.env.REACT_APP_key,
        base: "https://api.openweathermap.org/data/2.5/"
    }

    const search = (evt) => {
        if (query.length !== 0) {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=pt_br`)
                .then(res => res.json())
                .then(result => {
                    if (result.cod === '404') {
                        window.alert('Cidade Não Encontrada')
                    }
                    setWeather(result);
                });
        } else {
            window.alert('Digite um Valor Válido')
        }

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
        <div>
            <div>
                <img src={Logo} style={{ height: '100px', margin: 'auto' }} alt='logo' />
                <Typography variant="h3" component="h2">
                    Klima
                </Typography>
                <TextField
                    fullWidth
                    margin='dense'
                    id="standard-basic"
                    label="Digite o nome de uma cidade. Ex: Toronto"
                    variant="standard"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className={classes.root}

                />
                <Button
                    variant="outlined"
                    onClick={search}
                    className={classes.searchButton}
                >Procurar</Button>
                <br />
            </div>
            {
                (typeof weather.main != "undefined") ? (
                    <div className={classes.weatherBox}>
                        <Typography variant="h3">
                            {Math.round(weather.main.temp)}°C
                        </Typography>
                        <img className={classes.flag} src={`https://flagcdn.com/64x48/${(weather.sys.country).toLowerCase()}.png`} alt='flag' />
                        <Typography variant="body1" className={classes.country}>
                            {weather.name}, {weather.sys.country}
                        </Typography>
                        <Typography variant="body1">
                            {dateBuilder(new Date())}
                        </Typography>
                        <Typography className={classes.climate} variant="body1">
                            {weather.weather[0].description}
                        </Typography>
                    </div>
                ) : ('')
            }
            <div>
            </div>
        </div >
    )
}

export default Form
