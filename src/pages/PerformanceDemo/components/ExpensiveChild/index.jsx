
import { memo } from 'react';
import styles from './ExpensiveChild.module.scss';

function ExpensiveChild({ items }) {
    console.log("3. ExpensiveChild rendered");



    const calculateTotalLengthNames = () => {
        //calculate total length of all names
        return items.reduce((total, item) => total + item.length, 0);
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Expensive Child</h2>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index} className={styles.item}>{item}</li>
                    ))
                }
            </ul>

            <div>
                Total length names: {calculateTotalLengthNames()}
            </div>
        </div>
    )

}

export default memo(ExpensiveChild);

