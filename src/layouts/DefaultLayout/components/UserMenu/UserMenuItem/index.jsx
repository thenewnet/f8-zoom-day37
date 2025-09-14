import Avatar from '../Avatar';
import styles from './UserMenuItem.module.scss';

function UserMenuItem({item}) {

    return (
        <div className={styles.container}>

            <div className={styles.links}>
                {
                    item.children.map((child)=> (
                        <div className={styles.link}>
                            <a href={child.link} key={child.id}>{child.title}</a>
                        </div>
                    ))
                }
            </div>
        </div>

    );

}

export default UserMenuItem;