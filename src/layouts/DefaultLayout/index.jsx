import { Outlet } from 'react-router';
import styles from './DefaultLayout.module.scss';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function DefaultLayout() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Header />
                </div>
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
                <div className={styles.content}>
                    <Outlet />
                </div>   
            </div>
        </>
    )
}

export default DefaultLayout;
