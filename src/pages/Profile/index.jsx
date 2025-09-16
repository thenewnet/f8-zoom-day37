import { useEffect, useState } from 'react';

import styles from './Profile.module.scss';
import defaultAvatar from '../../assets/default_avatar.png';

function Profile() {
    const [previewAvatar, setPreviewAvatar] = useState(null);

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(previewAvatar);
        }
    }, [previewAvatar]);

    const hadleChangeAvatar = (e) => {
        const img = e.target.files[0];
        const previewUrl = URL.createObjectURL(img);

        setPreviewAvatar(previewUrl);
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.avatarWrapper}>
                    <h2>
                        Profile
                    </h2>

                    <div>
                        <label>
                            <input type="file" accept='image/*' hidden onChange={hadleChangeAvatar} />
                            <img src={previewAvatar || defaultAvatar} alt="avatar" className={styles.avatar} />
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;