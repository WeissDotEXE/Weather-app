import React, { Fragment } from "react";
import styles from "../Styles/ForecastCard.module.scss";
import Card from "../UI/Card";

import { useSelector } from "react-redux";

const ForecastCard = (props) => {
  const americanUnit = useSelector((state) => state.american);
  let forecast = props.weather.forecast.forecastday.map((weather) => {
    return (
      <Card className={styles.infoCard}>
        <h1 id={styles.date}>{weather.date}</h1>
        <div className={styles.info}>
          <h1>Avg Temperature</h1>
          <h1 id={styles.number}>{americanUnit ? weather.day.avgtemp_f+'°F' :weather.day.avgtemp_c+'°C'}</h1>
        </div>
        <div className={styles.bar}></div>
        <div className={styles.info}>
          <h1>Chance of rain</h1>
          <h1 id={styles.number}>{weather.day.daily_chance_of_rain+'%'}</h1>
        </div>
        <div className={styles.bar}></div>
        <div className={styles.info}>
          <h1>Avg Temperature</h1>
          <h1 id={styles.number}>{americanUnit ? weather.day.avgtemp_f :weather.day.avgtemp_c}</h1>
        </div>
        <div className={styles.bar}></div>
        <div className={styles.info}>
          <h1>Max Wind Speed</h1>
          <h1 id={styles.number}>{americanUnit ? weather.day.maxwind_mph+" Mph" :weather.day.maxwind_kph+' Kph'}</h1>
        </div>
      </Card>
    );
  });

  return <Card>
      <h1 id={styles.forecastHeader}>Forecast for next 3 days</h1>
      {forecast}
      </Card>;
};

export default ForecastCard;
