import { useState } from 'react';
import clsx from 'clsx';

import styles from './MyCourses.module.scss';
import MyCourse from './MyCourse';
import ModalMenu from '../ModalMenu';

function MyCourses() {
    const [isOpen, setIsOpen] = useState(false);

    const courses = [
        {
            id: 1,
            link: '#',
            image: 'https://files.fullstack.edu.vn/f8-prod/courses/31/67f4c93c28d4b.png',
            name: 'Fullstack Web Developer',
            status: 'Học cách đây 1 giờ trước',
            percent: 20
        },
        {
            id: 2,
            link: '#',
            image: 'https://files.fullstack.edu.vn/f8-prod/courses/13/13.png',
            name: 'Xây dựng website với ReactJS',
            status: 'Bạn chưa học khóa học này',
            percent: 0
        },
    ]

    function handleOpenCourses() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title} onClick={handleOpenCourses}>
                    Khóa học của tôi
                </div>

                <div className={clsx(styles.content, { [styles.open]: isOpen })}>



                    <ModalMenu>

                        {
                            isOpen && (
                                <div className={styles.header}>
                                    <h2 className={styles.title}>Khóa học của tôi</h2>
                                    <a href="#">Xem tất cả</a>
                                </div>
                            )
                        }

                        {
                            courses.map((course) => (
                                <MyCourse key={course.id} item={course} />
                            ))
                        }
                    </ModalMenu>
                </div>


            </div>
        </>
    )
}

export default MyCourses;