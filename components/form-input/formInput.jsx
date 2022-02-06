import { useState } from "react";
import styles from './formInput.module.css'; // Import css modules stylesheet as styles

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className={styles.formInput}>
            <label htmlFor={inputProps.name}>{label}</label>
            {(() => {
                switch (inputProps.type) {
                    case 'checkbox':
                        return (
                            <div className={styles.formInputpn}>
                                <input
                                    {...inputProps}
                                    checked={inputProps.checked}
                                    onChange={onChange}
                                />
                                <div className={styles.currentValue}>{
                                    inputProps.checked ? "On" : "Off"
                                }</div>
                            </div>
                        )
                    default:
                        return (
                            <div className={styles.formInputpn}>
                                <input
                                    {...inputProps}
                                    onChange={onChange}
                                    onBlur={handleFocus}
                                    onFocus={() =>
                                        inputProps.name === "confirmPassword" && setFocused(true)
                                    }
                                    focused={focused.toString()}
                                />
                                <div className={styles.currentValue}>{`${inputProps.value}`} {inputProps.unit ? inputProps.unit : ''}</div>
                            </div>
                        )
                }
            })()}
            <span>{errorMessage}</span>
        </div>
    );
};

export default FormInput;