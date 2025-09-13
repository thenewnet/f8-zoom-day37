import { useState } from 'react';
import clsx from 'clsx';

import styles from './MyCourses.module.scss';
import Modal from '../../../../components/Modal';
import MyCourse from './MyCourse';

function MyCourses() {
    const [isOpen, setIsOpen] = useState(false);

    const courses = [
        {
            id: 1,
            link: '#',
            name: 'Fullstack Web Developer',
            status: 'Học cách đây 1 giờ trước',
            percent: 20
        },
        {
            id: 2,
            link: '#',
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
                    <Modal isOpen={isOpen}>
                        {
                            courses.map((course) => (
                                <MyCourse key={course.id} item={course} />
                            ))
                        }
                    </Modal>
                </div>


            </div>
        </>
    )
}

export default MyCourses;