import React from 'react';
import styles from '../Styles/Button.module.scss';

const Button=(props)=>{
    return(
        <button type={`${props.type}`} onClick={props.onClick} className={`${styles.button} ${styles.className}`} id={`${styles.id}`}>
            {props.children}
        </button>
    )
}

export default Button;