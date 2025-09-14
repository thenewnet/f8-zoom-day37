import styles from './ModalMenu.module.scss';

function ModalMenu({ children }) {
    return (
        <>
            <div className={styles.container}>
                {children}
            </div>
        </>
    )
}

export default ModalMenu;