import React from "react";
import styles from "../Styles/InfoCard.module.scss";

import Card from "../UI/Card";

import { useSelector } from "react-redux";
const InfoCard = (props) => {
  const americanUnit = useSelector((state) => state.american);

  return (
    <Card className={styles.infoCard}>
      <div className={styles.info}>
        <h1>Feels like</h1>
        <h1 id={styles.number}>
          {americanUnit ? props.weather.current.feelslike_f+'°F' : props.weather.current.feelslike_c+'°C'}
        </h1>
      </div>
      <div className={styles.bar}></div>
      <div className={styles.info}>
        <h1>Wind</h1>
        <h1 id={styles.number}>
          {americanUnit ? props.weather.current.wind_mph+' Mph' : props.weather.current.wind_kph+' Kph'}
        </h1>
      </div>
      <div className={styles.bar}></div>
      <div className={styles.info}>
        <h1>Precipitation</h1>
        <h1 id={styles.number}>{props.weather.current.precip_in}mm</h1>
      </div>
      <div className={styles.bar}></div>
      <div className={styles.info}>
        <h1>Clouds</h1>
        <h1 id={styles.number}>{props.weather.current.cloud}%</h1>
      </div>
      <div className={styles.bar}></div>
      <div className={styles.info}>
        <h1>Humidity</h1>
        <h1 id={styles.number}>{props.weather.current.humidity}%</h1>
      </div>
      
    </Card>
  );
};

export default InfoCard;
