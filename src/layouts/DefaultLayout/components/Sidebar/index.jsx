import { Home, Map, FileText, MessageCircleQuestion } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import clsx from 'clsx';
import styles from './Sidebar.module.scss';

function Sidebar() {
    const location = useLocation();

    const menuItems = [
        {
            icon: Home,
            label: 'Trang chủ',
            path: '/'
        },
        {
            icon: Map,
            label: 'Modal Demo',
            path: '/modal-demo'
        },
        {
            icon: FileText,
            label: 'Scroll Demo',
            path: '/scroll-demo'
        },
        {
            icon: MessageCircleQuestion,
            label: 'Performance Demo',
            path: '/performance-demo'
        },
        {
            icon: Map,
            label: 'Focus Demo',
            path: '/focus-demo'
        },
        {
            icon: FileText,
            label: 'HOC Demo',
            path: '/hoc-demo'
        },
        {
            icon: MessageCircleQuestion,
            label: 'Render Props Demo',
            path: '/render-props-demo'
        },
        {
            icon: MessageCircleQuestion,
            label: 'Custom Hooks Demo',
            path: '/custom-hooks-demo'
        }
    ];

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    
                    return (
                        <Link 
                            key={item.path}
                            to={item.path} 
                            className={clsx(styles.navItem, { [styles.active]: isActive })}
                        >
                            <Icon className={styles.icon} size={20} />
                            <span className={styles.label}>{item.label}</span>
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}

export default Sidebar;