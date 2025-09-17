
import { memo } from 'react';
import styles from './ActionButtons.module.scss';

function ActionButtons({ onIncrement, onReset }) {
    console.log("ActionButtons rendered");

    return (
        <>
            <div className={styles.container}>
                <button onClick={onIncrement}>Increment</button>
                <button onClick={onReset}>Reset</button>
            </div>
        </>
    )
}

export default memo(ActionButtons);