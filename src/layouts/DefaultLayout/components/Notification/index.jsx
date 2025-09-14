import { useState } from 'react';
import { Bell } from 'lucide-react';
import clsx from 'clsx';

import styles from './Notification.module.scss';
import NotificationItem from './NotificationItem';
import Modal from '../../../../components/Modal';

function Notification() {
    const [isOpen, setIsOpen] = useState(false);

    const items = [
        {
            id: 1,
            link: "#",
            image: "https://fullstack.edu.vn/assets/images/f8_avatar.png",
            name: "Bài học Tìm hiểu về Closure mới được thêm vào.",
            created_time: "2 ngày trước",
            unread: true,
        },
        {
            id: 2,
            link: "#",
            image: "https://fullstack.edu.vn/assets/images/f8_avatar.png",
            name: "Bài học Tìm hiểu về Closure mới được thêm vào.",
            created_time: "2 ngày trước",
            unread: true,
        },
        {
            id: 3,
            link: "#",
            image: "https://fullstack.edu.vn/assets/images/f8_avatar.png",
            name: "Bài học Tìm hiểu về Closure mới được thêm vào.",
            created_time: "2 ngày trước",
            unread: true,
        },
        {
            id: 4,
            link: "#",
            image: "https://fullstack.edu.vn/assets/images/f8_avatar.png",
            name: "Bài học Tìm hiểu về Closure mới được thêm vào.",
            created_time: "2 ngày trước",
            unread: false,
        },
        {
            id: 5,
            link: "#",
            image: "https://fullstack.edu.vn/assets/images/f8_avatar.png",
            name: "Bài học Tìm hiểu về Closure mới được thêm vào.",
            created_time: "2 ngày trước",
            unread: true,
        },  
    ]

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
       <>
            <div className={styles.container}>
                <div className={styles.title} onClick={handleOpen}>
                    <Bell className={styles.icon} size={20} />
                </div>

                <div className={clsx(styles.content, { [styles.open]: isOpen })}>

                    <Modal isOpen={isOpen}>

                        {
                            isOpen && (
                                <div className={styles.header}>
                                    <h2 className={styles.title}>Thông báo</h2>
                                    <a href="#">Đánh dấu đã đọc</a>
                                </div>
                            )
                        }

                        {
                            items.map((item) => (
                                <NotificationItem key={item.id} item={item} />
                            ))
                        }
                    </Modal>
                </div>


            </div>
        </>
    )
}

export default Notification;