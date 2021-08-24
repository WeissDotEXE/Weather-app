import React, { Fragment } from "react";
import styles from "../Styles/Hourly.module.scss";
import Card from "../UI/Card";

const Hourly = (props) => {
  let hourly = props.weather.hour.map((hour) => {
    return (
      <div className={styles.scrollHour}>
        <img src={hour.condition.icon} />
        <p>{props.unit? hour.temp_f+'°F' : hour.temp_c+'°C'}</p>
        <p>{hour.time.substring(10)}</p>
      </div>
    );
  });
  return (
    <Fragment>
        <h1 id={styles.hourHeader}>Forecast by hour</h1>
      <Card className={styles.test}>{hourly}</Card>
    </Fragment>
  );
};

export default Hourly;
