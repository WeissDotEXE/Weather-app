import React, { useState } from "react";
import styles from "../Styles/Form.module.scss";

//import from redux(dispatch fro changing city name globally)
import { useDispatch } from "react-redux";
import Button from "../UI/Button";

const Form = (props) => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    props.submit();
    dispatch({ type: "userInput", value: query });
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <h1>Weather App</h1>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <Button id={styles.submitBtn} type='submit'>Search</Button>
    </form>
  );
};

export default Form;
