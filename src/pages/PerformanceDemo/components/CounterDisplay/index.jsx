
import { memo } from 'react';
import styles from './CounterDisplay.module.scss';

function CounterDisplay({ count }) {
    console.log("1. CounterDisplay rendered");
    return (
            <div className={styles.container}>Count: {count}</div>
    );
}

export default memo(CounterDisplay);