import styles from './Modal.module.scss';

function Modal({ isOpen = false, children }) {
    return (
        <>
            {
                isOpen && (
                    <div className={styles.container}>
                        {children}
                    </div>
                )
            }

        </>
    )
}

export default Modal;