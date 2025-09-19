
import { memo, useMemo } from 'react';
import styles from './ExpensiveChild.module.scss';

function ExpensiveChild({ items }) {
    console.log("3. ExpensiveChild rendered");



    const calculateTotalLengthNames =
        useMemo(
            () => {
                console.log('Calculating total length names...');
                //calculate total length of all names, 
                return items.reduce((total, item) => total + item.length, 0);
            }
            , [items]);

    // Tính toán nặng: tìm item có tên dài nhất
    const expensiveCalculation = useMemo(() => {
        console.log('Calculating longest name...');
        let longest = '';
        items.forEach(item => {
            // Thêm delay giả lập tính toán nặng
            for (let i = 0; i < 10000000; i++) { }
            if (item.length > longest.length) {
                longest = item;
            }
        });
        return longest;
    }, [items]);


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
                Total length names: {calculateTotalLengthNames}
            </div>
            <div>
                Longest name: {expensiveCalculation}
            </div>
        </div>
    )

}

export default memo(ExpensiveChild);

