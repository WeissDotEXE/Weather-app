import React, { useEffect, useState, useCallback } from "react";
import { Fragment } from "react";
import styles from "../Styles/WeatherInfo.module.scss";

import Intro from "../Home/Intro";
import MainCard from "../Weather/MainCard";
import InfoCard from "../Weather/InfoCard";
import ForecastCard from "./ForecastCard";

import { useDispatch } from "react-redux";
const WeatherInfo = (props) => {
  
  return (
    <Fragment>
      {typeof props.weather.location != "undefined" ? (
        <Fragment>
          <MainCard weather={props.weather} />
          <InfoCard weather={props.weather} />
          <ForecastCard weather={props.weather} />
        </Fragment>
      ) : (
        <Intro />
      )}
    </Fragment>
  );
};

export default WeatherInfo;
