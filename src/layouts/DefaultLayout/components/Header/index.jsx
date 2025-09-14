import { useState, useEffect, useRef } from 'react';
import AppLogo from '../AppLogo';
import MyCourses from '../MyCourses';
import Notification from '../Notification';
import SearchForm from '../SearchForm';
import UserMenu from '../UserMenu';
import styles from './Header.module.scss';

function Header() {
    const [openMenu, setOpenMenu] = useState(null);
    const headerRef = useRef(null);

    const handleMenuToggle = (menuName) => {
        setOpenMenu(openMenu === menuName ? null : menuName);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setOpenMenu(null);
            }
        }

        if (openMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openMenu]);

    return (
        <>
            <div className={styles.container} ref={headerRef}>
                <div className={styles.left}>
                    <AppLogo />
                </div>
                <div className={styles.search}>
                    <SearchForm />
                </div>
                <div className={styles.right}>
                    <MyCourses 
                        isOpen={openMenu === 'courses'}
                        onToggle={() => handleMenuToggle('courses')}
                    />
                    <Notification 
                        isOpen={openMenu === 'notification'}
                        onToggle={() => handleMenuToggle('notification')}
                    />
                    <UserMenu 
                        isOpen={openMenu === 'user'}
                        onToggle={() => handleMenuToggle('user')}
                    />
                </div>
            </div>
        </>
    )
}

export default Header;
