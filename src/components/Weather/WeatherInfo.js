import React, { useEffect, useState,useCallback } from "react";
import { Fragment } from "react";
import styles from "../Styles/WeatherInfo.module.scss";

import Card from "../UI/Card";
import Intro from "../Home/Intro";
import SliderBtn from "../UI/SliderBtn";
import MainCard from "../Weather/MainCard";
import InfoCard from '../Weather/InfoCard'
import ForecastCard from "./ForecastCard";
//import { useDispatch, useSelector } from "react-redux";

const WeatherInfo = (props) => {
  //variables for changing units such as temperature and speed
  // const dispatch = useDispatch();
  // const units=useSelector(state=>state.american);

  //variables for showing different text next to data
  const [unit, setUnit] = useState(false);
  return (
    <Fragment>
      {typeof props.weather.location != "undefined" ? (
        <Fragment>
          <MainCard weather={props.weather} />
          <InfoCard weather={props.weather} />
          <ForecastCard weather={props.weather}/>
        </Fragment>
      ) : (
        <Intro />
      )}
    </Fragment>
  );
};

export default WeatherInfo;
