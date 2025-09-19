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
        setCount(prevCount => prevCount + 1);
    }, []);

    const handleReset = useCallback(() => {
        setCount(0);
    }, []);

    const handleAddItem = useCallback(() => {
        // tạo số ngẫu nhiên từ 1 đến 50
        const randomLength = Math.floor(Math.random() * 50) + 1;

        // tạo chuỗi ngẫu nhiên độ dài randomLength
        const randomString = Array.from({ length: randomLength }, () =>
            Math.random().toString(36).charAt(2) // lấy 1 ký tự ngẫu nhiên (0-9, a-z)
        ).join("");

        setItems([...items, `Item ${randomString}`]);
    }, [items]);
    return (
        <>
            <div className={styles.container}>
                <div className={styles.counter}>
                    <CounterDisplay count={count} />
                </div>
                <div className={styles.actionButtons}>
                    <ActionButtons onIncrement={handleIncrement} onReset={handleReset} />
                </div>
                <div className={styles.expensiveChild}>
                    <ExpensiveChild items={items} />
                </div>

                <div className={styles.buttons}>
                    <button className={styles.btn} onClick={handleIncrement}>Increment Count</button>
                    <button className={styles.btn} onClick={() => setName("Button changed")}>Name: {name}</button>
                    <button className={styles.btn} onClick={() => handleAddItem()}>Add Item</button>
                </div>

            </div>
        </>
    )
}

export default PerformanceDemo;