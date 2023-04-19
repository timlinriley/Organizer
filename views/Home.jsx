import React from 'react'
import {useEffect, useState} from 'react';
import axios from "axios";

const Home = () => {
    const [weather, setWeather] = useState([]);
    const getWeather = async () => {
        const response = await axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=&appid=13ef57263234e3613632e206c7dfd710')
        const data = response;
        setWeather(data);
        console.log(weather);
    }
    useEffect(() => {
        getWeather()
    },[])
  return (
    <div>
        <nav>
            <a href="/todos">Todos</a> 
            <a href="/groceries">Grocery List</a>
            <a href="/pantry">Pantry</a>

        </nav>
        <h1>Welcome to the personal organizer app!</h1>
        <h4>{weather.hourly.feels_like}</h4>
    </div>
  )
}

export default Home