import React from "react";
import styles from "../Styles/MainCard.module.scss";

import SliderBtn from "../UI/SliderBtn";
import Card from "../UI/Card";

import { useSelector} from "react-redux";
const MainCard = (props) => {

  const unit=useSelector(state=>state.american)

  return (
    <Card className={styles.mainCard}>
      <div className={styles.leftContent}>
        <h1>{props.weather.location.name}</h1>
        <div className={styles.slider}>
          <p>Kph/°C</p>
          <SliderBtn />
          <p>Mph/°F</p>
        </div>
      </div>
      <div className={styles.rightContent}>
        <h1>{unit ? props.weather.current.temp_f+'°F' : props.weather.current.temp_c+'°C'}</h1>
        <img id={styles.icon} src={props.weather.current.condition.icon} />
        <p>{props.weather.current.condition.text}</p>
      </div>
    </Card>
  );
};

export default MainCard;
