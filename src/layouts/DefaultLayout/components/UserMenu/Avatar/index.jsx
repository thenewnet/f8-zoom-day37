import styles from './Avatar.module.scss';
import clsx from 'clsx';
import avatar from '../../../../../assets/default_avatar.png';

function Avatar({ size = 'default' }) {
    return (
        <div className={clsx(styles.avatarWrapper, { [styles.large]: size === 'large' })}>
            <div className={styles.avatar}>
                <img src={avatar} alt="avatar" />
            </div>
        </div>
    );
}

export default Avatar;
