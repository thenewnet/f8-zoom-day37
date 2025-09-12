import styles from './AppLogo.module.scss';
import logo from '../../../../assets/f8-logo.png';
import { Link } from 'react-router';

function AppLogo() {
    return (
        <>
            <div className={styles.container}>
                <div>
                    <Link to='/'>
                        <img src={logo} alt='F8' className={styles.logo} />
                    </Link>
                </div>
                <div className={styles.sub_title}>
                    <Link to='/'>
                        Học Lập Trình Để Đi Làm
                    </Link>
                </div>
            </div>
        </>
    )
}

export default AppLogo;