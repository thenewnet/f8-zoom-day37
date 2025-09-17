import styles from './PerformanceDemo.module.scss';
import CounterDisplay from './components/CounterDisplay';
import ActionButtons from './components/ActionButtons';
import ExpensiveChild from './components/ExpensiveChild';
import { useCallback, useState } from 'react';

function PerformanceDemo() {
    const [count, setCount] = useState(0);
    
    const _items = [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
        'Item 7',
        'Item 8',
        'Item 9',
        'Item 10',
    ]

    const [items, setItems] = useState(_items);
    const [name, setName] = useState("");




    const handleIncrement = useCallback(() => {
        setCount(prevCount => prevCount  + 1);
    }, []);

    const handleReset = useCallback(() => {
        setCount(0);
    }, []);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.counter}>
                    <CounterDisplay count={count}/>
                </div>
                <div className={styles.actionButtons}>
                    <ActionButtons onIncrement={handleIncrement} onReset={handleReset}/>
                </div>
                <div className={styles.expensiveChild}>
                    <ExpensiveChild items={items} />
                </div>

                <div className={styles.buttons}>
                    <button className={styles.btn} onClick={handleIncrement}>Increment Count</button>
                    <button className={styles.btn} onClick={() => setName("Button changed")}>Name: {name}</button>
                    <button className={styles.btn} onClick={() => setItems([...items, `Item ${items.length + 1}`])}>Add Item</button>
                </div>

            </div>
        </>
    )
}

export default PerformanceDemo;