import styles from './formGroupInput.module.css';
import React, { Children } from "react";

const FormGroupInput = ({ children, label, isShow }) => {
    const child = Children.only(children);
    return (
        isShow &&
        <div className={styles.formGroupInput}>
            <label className={styles.label}>{label || ''}</label>
            <div className={styles.formGroupInputContainer}>
                {React.cloneElement(child)}
            </div>
        </div>
    )
}

export default FormGroupInput;