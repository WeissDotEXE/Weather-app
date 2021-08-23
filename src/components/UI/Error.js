import React, { Fragment } from "react";
import styles from "../Styles/Error.module.scss";

import Card from "./Card";

import { useDispatch } from "react-redux";
import Button from "./Button";

const Error = (props) => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <div className={styles.backdrop} onClick={props.closeHandler}></div>
      <Card className={styles.error}>
        <i class="fas fa-exclamation"></i>
        <h1>{props.errorMessage}</h1>
        <Button onClick={props.closeHandler}>Okay.</Button>
      </Card>
    </Fragment>
  );
};

export default Error;
