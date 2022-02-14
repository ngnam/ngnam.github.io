import { useState, useRef } from "react";
import styles from './formInput.module.css'; // Import css modules stylesheet as styles

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;
    const inputRef = useRef();

    const handleFocus = (e) => {
        setFocused(true);
    };

    const handlePlus = (e) => {
        e.preventDefault();
        if (isNaN(inputRef.current.value)) { inputRef.current.value = 0 }
        inputRef.current.value = parseInt(inputRef.current.value) + 1
        inputRef.current.focus()
    }

    const handleMinus = (e) => {
        e.preventDefault();
        if (isNaN(inputRef.current.value)) { inputRef.current.value = 0; }
        inputRef.current.value = parseInt(inputRef.current.value) - 1
        inputRef.current.focus()
    }

    return (
        !inputProps.hidden && <div className={styles.formInput}>
            <label htmlFor={inputProps.name}>{label || ''}</label>
            {(() => {
                switch (inputProps.type) {
                    case 'checkbox':
                        return (
                            <div className={styles.formInputpn}>
                                <label className="input_checkbox_container">
                                    {inputProps.value ? "On" : "Off"}
                                    <input
                                        {...inputProps}
                                        checked={inputProps.value}
                                        onChange={onChange}
                                    />
                                    <span className="checkmark input-checkbox-custom"></span>
                                </label>
                            </div>
                        )
                    case 'radio':
                        return (
                            <div className={styles.formInputpn}>
                                <label className="input_checkbox_container">
                                    {inputProps.value ? "On" : "Off"}
                                    <input
                                        {...inputProps}
                                        checked={inputProps.value}
                                        onChange={onChange}
                                    />
                                    <span className="checkmark input-radio-custom"></span>
                                </label>
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
                    case 'range':
                        return (
                            <div className={styles.formInputpn}>
                                <input
                                    {...inputProps}
                                    onChange={onChange}                                   
                                    onBlur={handleFocus}
                                    className={`input-range-custom${inputProps.className ? ' '+inputProps.className : ''}`}
                                />
                                <div className={styles.currentValue}>{`${inputProps.value}`}{inputProps.unit ? inputProps.unit : ''}</div>
                            </div>
                        )
                    case 'number':
                        return (
                            <div className={styles.formInputpn}>
                                <div className={styles.formInputGrouppn}>
                                    <input ref={inputRef}
                                        {...inputProps}
                                        type="text"
                                        pattern='[0-9]'
                                        onChange={onChange}
                                        onFocus={onChange}
                                    />
                                    <div className={styles.formInputAddon}>
                                        <span onClick={handlePlus} className={styles.formButtonPlus}>+</span>
                                        <span onClick={handleMinus}>-</span>
                                    </div>
                                </div>
                                <div className={styles.currentValue}>{`${inputProps.value}`}{inputProps.unit ? inputProps.unit : ''}</div>
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
                                <div className={styles.currentValue}>{`${inputProps.value}`}{inputProps.unit ? inputProps.unit : ''}</div>
                            </div>
                        )
                }
            })()}
            <span className={styles.formInput__error}>{errorMessage}</span>
        </div>
    );
};

export default FormInput;


