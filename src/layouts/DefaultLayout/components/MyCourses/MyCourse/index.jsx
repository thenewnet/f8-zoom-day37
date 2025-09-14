import { Link } from 'react-router';
import styles from './MyCourse.module.scss';

function MyCourse({ item }) {
    console.log(item);
    
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Link to={item.link}>
                    <div className={styles.left}>
                        <img  className={styles.image} src={item.image} alt={item.name} />
                    </div>
                    <div className={styles.right}>
                        <h3>{item.name}</h3>
                        <p>{item.status}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MyCourse;