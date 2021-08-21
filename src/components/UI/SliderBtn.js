import React,{useState,useEffect} from 'react';
import styles from '../Styles/SliderBtn.module.scss';

import { useDispatch } from 'react-redux';

const SliderBtn=(props)=>{

    const dispatch = useDispatch();
    const [state,setState]=useState(false);

    const stateHandler=()=>{
        setState(!state);
        dispatch({type:'changeUnits'})
    }
    let active=state ? styles.btnOn : styles.btn;

    return(
        <div className={`${styles.slider} ${styles.className}`} onClick={stateHandler} >
            <div className={`${active}`}></div>
        </div>
    );
}

export default SliderBtn;