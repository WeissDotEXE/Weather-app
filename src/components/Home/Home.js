import React, { useState, useEffect, useCallback, Fragment } from "react";
import styles from "../Styles/Home.module.scss";

import WeatherInfo from "./WeatherInfo";
import Card from "../UI/Card";

const api = {
  key: "d7726024ca476afb780ecf8b215bd47a",
};

const Home = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const [isLoading,setIsLoading]=useState(false);
  const [isCompleted,setIsCompleted]=useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${query}&days=3`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": "bd6985da2dmshd632258bb79ccd3p191fb7jsn37a783f68cf1",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com"
        }
      })
      const data=await response.json();
      setWeather(data);
    } catch (error) {
      console.log("error here");
      console.log(error);
    }
    setQuery('')
    setIsCompleted(true);
    setIsLoading(false);
  };

  let className='';
  if(isCompleted){
    className='Completed'
  }

  return (
    <div className={`${styles.home}`}>
      <img src="https://images.unsplash.com/photo-1611416517780-eff3a13b0359?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=904&q=80" />
      
      <form onSubmit={submitHandler}>
      <h1>Weather App</h1>
        <input type="text" onChange={(e) => setQuery(e.target.value)} value={query} />
        <button type="submit">Search</button>
      </form>
      <WeatherInfo weather={weather}/>
    </div>
  );
};

export default Home;
