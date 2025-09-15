import styles from './Modal.module.scss';
import PropTypes from "prop-types";


function Modal({
    isOpen = false,
    onAfterOpen,
    onAfterClose,
    onRequestClose,
    closeTimeoutMS,
    overlayClassName,
    className,
    bodyOpenClassName,
    htmlOpenClassName,
    shouldCloseOnOverlayClick,
    shouldCloseOnEsc,
    children }) {

    if (!isOpen) return null;

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

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onAfterOpen: PropTypes.func,
    onAfterClose: PropTypes.func,
    onRequestClose: PropTypes.func,
    closeTimeoutMS: PropTypes.number,
    overlayClassName: PropTypes.string,
    className: PropTypes.string,
    bodyOpenClassName: PropTypes.string,
    htmlOpenClassName: PropTypes.string,
    shouldCloseOnOverlayClick: PropTypes.bool,
    shouldCloseOnEsc: PropTypes.bool,

    children: PropTypes.node.isRequired,
};

export default Modal;