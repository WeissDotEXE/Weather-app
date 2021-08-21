import React, { useState, useEffect, useCallback, Fragment } from "react";
import styles from "../Styles/Home.module.scss";

import WeatherInfo from "../Weather/WeatherInfo";
import Form from "./Form";

//import for redux to get information from it
import { useSelector,useDispatch} from "react-redux";
import Intro from "./Intro";

const api = {
  key: "d7726024ca476afb780ecf8b215bd47a",
  photoKey: "AIzaSyBnTO3gA5gLmqqw5-GfLNnzVJrQpREl1MU",
};

const Home = () => {
  const cityRedux = useSelector((state) => state.city);

  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async () => {
    try {
      // setIsLoading(true);
      const weatherRes = await fetch(
        `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cityRedux}&days=3`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "bd6985da2dmshd632258bb79ccd3p191fb7jsn37a783f68cf1",
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          },
        }
      );
      const weatherData = await weatherRes.json();
      console.log(weatherData);
      setWeather(weatherData);
    } catch (error) {
      console.log("error here");
      console.log(error);
    }
    // setIsLoading(false);
  };

  useEffect(() => {
    submitHandler();
  }, [cityRedux]);
  return (
    <div className={styles.home}>
      <img src="https://images.unsplash.com/photo-1611416517780-eff3a13b0359?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=904&q=80" />
      <Form submit={submitHandler} />
      <WeatherInfo weather={weather} />
    </div>
  );
};

export default Home;
