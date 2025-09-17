import { Link } from 'react-router';
import Avatar from '../Avatar';
import styles from './UserMenuItem.module.scss';

function UserMenuItem({item}) {

    return (
        <div className={styles.container}>

            <div className={styles.links}>
                {
                    item.children.map((child, index)=> (
                        <div className={styles.link} key={index}>
                            <Link to={child.link}>{child.title}</Link>
                        </div>
                    ))
                }
            </div>
        </div>

    );

}

export default UserMenuItem;