import React from 'react';
import styles from '../Styles/Intro.module.scss';

import Card from '../UI/Card';
const Intro=()=>{
    return(
        <Card className={styles.intro}>
            <h1>App created by <a target="_blank" href="https://github.com/weissdotexe">WeissDotExe</a></h1>
            <p>For this website , I used <a href="https://rapidapi.com/weatherapi/api/weatherapi-com/"> WeatherAPI.com</a> for fetching data.</p>
            <img src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=383&q=80" />
        </Card>
    )
}

export default Intro;