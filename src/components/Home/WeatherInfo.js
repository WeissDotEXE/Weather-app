import React from "react";
import styles from "../Styles/WeatherInfo.module.scss";

const WeatherInfo = (props) => {
  return (
    <div className={styles.weatherInfo}>
      {(typeof(props.weather.location) != "undefined") ? (
        <div>
            <h1>{props.weather.location.name}</h1>
        </div>
      ) : ("")}
    </div>
  );
};

export default WeatherInfo;
