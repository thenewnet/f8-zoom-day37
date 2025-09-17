
import styles from './ExpensiveChild.module.scss';

function ExpensiveChild ({items}) {
    console.log("ExpensiveChild rendered");

    return (
        <div className={styles.container}>
            <h2>Expensive Child</h2>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )

}

export default ExpensiveChild;

