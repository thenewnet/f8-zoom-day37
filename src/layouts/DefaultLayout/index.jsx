import { Outlet } from 'react-router';
import styles from './DefaultLayout.module.scss';
import Header from './components/Header';

function DefaultLayout() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Header />
                </div>  
                <div className={styles.content}>
                    <Outlet />
                </div>   
            </div>
        </>
    )
}

export default DefaultLayout;