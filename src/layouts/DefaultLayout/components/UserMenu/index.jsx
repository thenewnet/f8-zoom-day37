import clsx from 'clsx';

import styles from './UserMenu.module.scss';
import Avatar from './Avatar';
import UserMenuItem from './UserMenuItem';
import { Link } from 'react-router';
import ModalMenu from '../ModalMenu';

function UserMenu({ isOpen, onToggle }) {
    const items = [
        {
            children: [
                {
                    id: 1,
                    title: "Trang cá nhân",
                    link: "profile"
                }
            ]
        },
        {
            children: [
                {
                    id: 2,
                    title: "Viết blog",
                    link: "#"
                },
                {
                    id: 3,
                    title: "Bài viết của tôi",
                    link: "#"
                },
                {
                    id: 4,
                    title: "Bài viết đã lưu",
                    link: "#"
                }
            ]
        },
        {
            children: [
                {
                    id: 5,
                    title: "Cài đặt",
                    link: "#"
                },
                {
                    id: 6,
                    title: "Đăng xuất",
                    link: "#"
                }
            ]
        }
    ];

    function handleOpen() {
        onToggle();
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title} onClick={handleOpen}>
                    <Avatar />
                </div>


                <div className={clsx(styles.content, { [styles.open]: isOpen })}>

                    <ModalMenu>
                        {
                            isOpen && (

                                <div className={styles.header}>
                                    <Link to="/profile">
                                        <div className={styles.left}>
                                            <Avatar size="large" />
                                        </div>
                                        <div className={styles.right}>
                                            <h2>Nguyễn Văn A</h2>
                                            <p>@nguyenvana</p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }

                        {
                            items.map((item, index) => (
                                <UserMenuItem key={index} item={item} />
                            ))
                        }
                    </ModalMenu>
                </div>
            </div>
        </>
    )
}

export default UserMenu;
