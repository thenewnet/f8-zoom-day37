import AppLogo from '../AppLogo';
import MyCourses from '../MyCourses';
import Notification from '../Notification';
import SearchForm from '../SearchForm';
import UserMenu from '../UserMenu';
import styles from './Header.module.scss';

function Header() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <AppLogo />
                </div>
                <div className={styles.search}>
                    <SearchForm />
                </div>
                <div className={styles.right}>
                    <MyCourses />
                    <Notification />
                    <UserMenu />
                </div>
            </div>
        </>
    )
}

export default Header;