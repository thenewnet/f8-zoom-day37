import { forwardRef, useImperativeHandle, useRef } from 'react';

import styles from './CustomInput.module.scss';

const CustomInput = forwardRef(
    ({ label, placeholder, value, onChange }, ref) => {
        const inputRef = useRef();

        useImperativeHandle(
            ref,
            () => {
                return {
                    focus() {
                        inputRef.current.focus();
                    },
                    blur() {
                        inputRef.current.blur();
                    },
                    getValue() {
                        return inputRef.current.value;
                    },
                    setValue(_value) {
                        inputRef.current.value = _value;
                    }
                }
            }
        )
        return (
            <>
                <div
                    className={styles.container}
                >
                    <label className={styles.label}>{label}</label>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        className={styles.input} />
                </div>
            </>
        )
    })

export default CustomInput;