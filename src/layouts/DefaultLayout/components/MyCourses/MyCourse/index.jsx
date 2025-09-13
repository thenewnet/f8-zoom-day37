import { Link } from 'react-router';
import styles from './MyCourse.module.scss';

function MyCourse({item}) {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Link to={item.link}>
                    <div className={styles.left}>
                        <img src={item.Image} alt={item.Name} />
                    </div>
                    <div className={styles.right}>
                        <h3>{item.Name}</h3>
                        <p>{item.Description}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MyCourse;