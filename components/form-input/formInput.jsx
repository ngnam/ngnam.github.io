import { useState } from "react";
import styles from './formInput.module.css'; // Import css modules stylesheet as styles
import cn from 'classnames'

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        !inputProps.hidden && <div className={styles.formInput}>
            <label htmlFor={inputProps.name}>{label || ''}</label>
            {(() => {
                switch (inputProps.type) {
                    case 'checkbox':
                        return (
                            <div className={styles.formInputpn}>
                                <input
                                    {...inputProps}
                                    checked={inputProps.value}
                                    onChange={onChange}
                                />
                                <div className={styles.currentValue}>{
                                    inputProps.value ? "On" : "Off"
                                }</div>
                            </div>
                        )
                    case 'select':
                        return (
                            <div className={styles.formInputpn}>
                                <select onChange={onChange} {...inputProps}>
                                    <option value="">--choose--</option>
                                    {inputProps.options.map((option, index) => (
                                        <option key={index} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>
                        )
                    default:
                        return (
                            (
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
                                    <div className={styles.currentValue}>{`${inputProps.value}`}{inputProps.unit ? inputProps.unit : ''}</div>
                                </div>
                            )
                        )
                }
            })()}
            <span>{errorMessage}</span>
        </div>
    );
};

export default FormInput;