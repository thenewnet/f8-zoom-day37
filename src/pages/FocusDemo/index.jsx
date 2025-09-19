
import { useEffect, useRef, useState } from 'react';
import styles from './FocusDemo.module.scss';
import CustomInput from '@/components/CustomInput';

function FocusDemo() {
    const [result, setResult] = useState('');
    const [count, setCount] = useState(0);

    const countRef = useRef(0);

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    const handleClearBoth = () => {
        inputRef1.current.setValue('');
        inputRef2.current.setValue('');
        inputRef1.current.blur();
        inputRef2.current.blur();
        setResult('');
    }

    useEffect(() => {
        countRef.current += 1;
    });

    const handleGetValues = () => {
        setResult(`Input 1: ${inputRef1.current.getValue()} - Input 2: ${inputRef2.current.getValue()}`);
    }

    const handleCounter = () => {
        setCount(count + 1);
    }
    return (
        <>
            <div className={styles.container}>
                <h1>Focus Demo</h1>
                <div className={styles.inputWrapper}>
                    <div className={styles.counter}>
                        <h2>Count: {count}</h2>
                        <h2>Re render (Count Ref): {countRef.current}</h2>

                        <button onClick={handleCounter} className={styles.btn}>Get Values</button>
                    </div>
                    <div className={styles.item}>
                        <CustomInput label="Name" placeholder="Enter your name" ref={inputRef1} />
                    </div>

                    <div className={styles.item}>
                        <CustomInput label="Name" placeholder="Enter your name" ref={inputRef2} />
                    </div>

                    <div className={styles.result}>
                        {result}
                    </div>

                    <div className={styles.btnActions}>
                        <button onClick={() => inputRef1.current.focus()} className={styles.btn}>Focus Input 1</button>
                        <button onClick={() => inputRef2.current.focus()} className={styles.btn}>Focus Input 2</button>
                        <button onClick={handleClearBoth} className={styles.btn}>Clear Both</button>
                        <button onClick={handleGetValues} className={styles.btn}>Get Values</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FocusDemo;