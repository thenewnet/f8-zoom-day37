import { useRef, useState } from 'react';
import styles from './ModalDemo.module.scss';
import Modal from '../../components/Modal';

function ModalDemo() {
    const [isOpenBasic, setIsOpenBasic] = useState(false);
    const [isOpenAnimation, setIsOpenAnimation] = useState(false);
    const [isOpenNotCloseOvelay, setIsOpenNotCloseOvelay] = useState(false);
    const [isOpenNotCloseEsc, setIsOpenNotCloseEsc] = useState(false);
    const [isOpenCustomClassName, setIsOpenCustomClassName] = useState(false);
    const [isOpenCallback, setIsOpenCallback] = useState(false);
    const [isOpenImprativeHandle, setIsOpenImprativeHandle] = useState(false);

    const modalRef = useRef(false);

    return (
        <>
            <div className={styles.container}>

                <h1>Model demo page</h1>

                {/* Basic Modal */}
                <div className={styles.item}>
                    <h5>Basic Modal</h5>
                    <button className={styles.btnOpenModel} onClick={() => setIsOpenBasic(true)}>Open Basic Modal</button>

                    <Modal isOpen={isOpenBasic} onRequestClose={() => setIsOpenBasic(false)}
                    >
                        <div>
                            <h2>Basic Modal</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                        </div>
                    </Modal>
                </div>

                {/* Animation Modal */}
                <div className={styles.item}>
                    <h5>Modal với Animation</h5>
                    <button className={styles.btnOpenModel} onClick={() => setIsOpenAnimation(true)}>Open Animation Modal</button>

                    <Modal isOpen={isOpenAnimation}
                        onRequestClose={() => setIsOpenAnimation(false)}
                        closeTimeoutMS={300}
                    >
                        <div>
                            <h2>Animation Modal</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                        </div>
                    </Modal>
                </div>


                <div className={styles.item}>
                    <h5>Modal không đóng khi click overlay</h5>
                    <button className={styles.btnOpenModel}
                        onClick={() => setIsOpenNotCloseOvelay(true)}>Open Modal</button>
                    <Modal isOpen={isOpenNotCloseOvelay}
                        onRequestClose={() => setIsOpenNotCloseOvelay(false)}
                        shouldCloseOnOverlayClick={false}
                    >
                        <div>
                            <h2>Overlay Modal</h2>
                            <p>Modal không đóng khi click overlay.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                        </div>
                    </Modal>
                </div>
                <div className={styles.item}>
                    <h5>Modal không đóng khi nhấn Esc</h5>
                    <button className={styles.btnOpenModel}
                        onClick={() => setIsOpenNotCloseEsc(true)}>Open Modal</button>
                    <Modal isOpen={isOpenNotCloseEsc}
                        onRequestClose={() => setIsOpenNotCloseEsc(false)}
                        shouldCloseOnEsc={false}
                    >
                        <div>
                            <h2>Esc Modal</h2>
                            <p>Modal không đóng khi click Esc.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                        </div>
                    </Modal>
                </div>
                <div className={styles.item}>
                    <h5>Modal với custom className</h5>
                    <button className={styles.btnOpenModel}
                        onClick={() => setIsOpenCustomClassName(true)}
                    >Open Modal</button>

                    <Modal isOpen={isOpenCustomClassName}
                        onRequestClose={() => setIsOpenCustomClassName(false)}
                        className={styles.customModalClassName}
                    >
                        <div>
                            <h2>Custom class Modal</h2>
                            <p>Modal với custom className.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                        </div>
                    </Modal>
                </div>
                <div className={styles.item}>
                    <h5>Modal với callbacks</h5>
                    <button
                        className={styles.btnOpenModel}
                        onClick={() => setIsOpenCallback(true)}
                    >
                        Open Modal</button>
                    <Modal isOpen={isOpenCallback}
                        onRequestClose={() => setIsOpenCallback(false)}
                        onAfterOpen={() => console.log('Modal opened')}
                        onAfterClose={() => console.log('Modal closed')}
                        closeTimeoutMS={300}
                    >
                        <div>
                            <h2>Callbacks Modal</h2>
                            <p>Modal với callbacks.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                        </div>
                    </Modal>
                </div>

                {/* Cập nhật Modal với useImperativeHandle */}
                <div className={styles.item}>
                    <h5>Modal với isOpenImprativeHandle</h5>
                    <button
                        className={styles.btnOpenModel}
                        onClick={() => modalRef.current.open()}
                    >
                        Open Modal</button>
                    <Modal
                        ref={modalRef}
                        // isOpen={isOpenImprativeHandle}
                        onRequestClose={() => modalRef.current.close()}
                        closeTimeoutMS={0}
                    >
                        <div className={styles.bodyModal}>
                            <h2>useImperativeHandle Modal</h2>
                            <p>Modal với useImperativeHandle.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>

                            <button
                                className={styles.btnOpenModel}
                                onClick={() => modalRef.current.close()}
                            >
                                Close Modal</button>
                            <button
                                className={styles.btnOpenModel}
                                onClick={() => modalRef.current.toggle()}
                            >
                                Toogle Modal</button>
                        </div>
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default ModalDemo;