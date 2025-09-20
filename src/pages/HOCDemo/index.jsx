
import { useState } from 'react';

import UserProfile from '@/components/UserProfile';
import ProductList from '@/components/ProductList';
import styles from './HOCDemo.module.scss';

function HOCDemo() {
    const [userLoading, setUserLoading] = useState(false);
    const [productLoading, setProductLoading] = useState(false);

    const handleToggleLoadUser = () => {
        setUserLoading(!userLoading);
    }
    const handleToggleLoadProduct = () => {
        setProductLoading(!productLoading);
    }

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>HOC Demo</h1>

                <div className={styles.content}>
                    <div className={styles.left}>
                        <UserProfile isLoading={userLoading} />


                    </div>
                    <div className={styles.right}>
                        <ProductList isLoading={productLoading} />
                    </div>
                </div>
                <div className={styles.btnActions}>
                    <button className={styles.btn}
                        onClick={handleToggleLoadUser}>
                        Toggle Load users
                    </button>
                    <button className={styles.btn}
                        onClick={handleToggleLoadProduct}>
                        Toggle Load products
                    </button>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default HOCDemo;