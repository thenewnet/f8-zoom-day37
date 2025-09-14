import { Link } from 'react-router';
import clsx from 'clsx';
import styles from './NotificationItem.module.scss';

function NotificationItem ({ item }) {
    return (
       <div className={styles.container}>
            <div className={clsx(styles.item, {[styles.unread]: item.unread})}>
                <Link to={item.link}>
                    <div className={styles.left}>
                        <img  className={styles.image} src={item.image} alt={item.name} />
                    </div>
                    <div className={styles.right}>
                        <h3>{item.name}</h3>
                        <p>{item.created_time}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default NotificationItem;