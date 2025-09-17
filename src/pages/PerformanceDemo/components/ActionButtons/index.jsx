
import { memo } from 'react';
import styles from './ActionButtons.module.scss';

function ActionButtons({ onIncrement, onReset }) {
    console.log("2. ActionButtons rendered");

    return (
        <>
            <div className={styles.container}>
                <button className={styles.btn} onClick={onIncrement}>Increment</button>
                <button className={styles.btn} onClick={onReset}>Reset</button>
            </div>
        </>
    )
}

export default memo(ActionButtons);