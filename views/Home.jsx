import React from 'react'
import {useEffect, useState} from 'react';
import axios from "axios";

const Home = () => {
    const [weather, setWeather] = useState([]);
    const getWeather = async () => {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=40.41&lon=73.54&appid=13ef57263234e3613632e206c7dfd710')
        const data = response;
        setWeather(data);
        // console.log(data);
    }
    useEffect(() => {
        getWeather()
        console.log(weather)
    },[])
    const handleClick = () => {
        getWeather()
        console.log(clicked)
    }
  return (
    <div>
        <nav>
            <a href="/todos">Todos</a> 
            <a href="/groceries">Grocery List</a>
            <a href="/pantry">Pantry</a>

        </nav>
        <h1>Welcome to the personal organizer app!</h1>
        <button onClick={handleClick}>Show Weather</button>
      <h4>{weather}{console.log(weather)}</h4>
    </div>
  )
}

export default Home