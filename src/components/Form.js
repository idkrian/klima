import React, { useState, useEffect } from 'react';
import { TextField, Typography, Button, Box } from '@mui/material';
import Logo from '../assets/img/logo.png'
import '@fontsource/roboto/400.css'
import { useStyles } from '../stylesheets/homeStyles';


function Form() {
    const classes = useStyles();

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const api = {
        key: process.env.REACT_APP_key,
        base: "https://api.openweathermap.org/data/2.5/"
    }

    const search = (evt) => {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=pt_br`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
            });
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
            <div style={{ fontFamily: "Roboto" }}>
                <img src={Logo} style={{ height: '100px', margin: 'auto' }} />
                <Typography variant="h3" component="h2">
                    Klima
                </Typography>
                <TextField
                    fullWidth
                    margin='dense'
                    id="standard-basic"
                    label="Digite o nome de uma cidade. Ex: Toronto"
                    variant="standard"
                    value={query} onChange={e => setQuery(e.target.value)}
                    className={classes.root}

                />
                <Button
                    variant="outlined"
                    onClick={search}
                    style={{
                        borderColor: 'black',
                        color: 'black',
                        boxShadow: '1px 1px 2px'
                    }}
                >Procurar</Button>
                <br />
            </div>
            {
                (typeof weather.main != "undefined") ? (
                    <div className={classes.weatherBox}>
                        <div className="">
                            <Typography variant="body1" className={classes.country}>
                                {weather.name}, {weather.sys.country}
                            </Typography>
                            <Typography variant="body1">
                                {dateBuilder(new Date())}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body1">
                                {Math.round(weather.main.temp)}°C
                            </Typography>
                            <Typography className={classes.climate} variant="body1">
                                {weather.weather[0].description}
                            </Typography>
                        </div>
                    </div>
                ) : ('')
            }
            <div>
            </div>
        </div >
    )
}

export default Form
