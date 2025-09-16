import { CircleX } from 'lucide-react';
import styles from './Modal.module.scss';
import PropTypes from "prop-types";
import { useEffect } from 'react';
import clsx from 'clsx';


function Modal({
    isOpen = false,
    onAfterOpen,
    onAfterClose,
    onRequestClose,
    closeTimeoutMS = 0,
    overlayClassName,
    className,
    bodyOpenClassName,
    htmlOpenClassName = 'modal-open',
    shouldCloseOnOverlayClick = true,
    shouldCloseOnEsc = true,
    children }) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleRequestClose = () => {
        setTimeout(onRequestClose, closeTimeoutMS);
    }

    // For On Close
    useEffect(() => {
        const handleKeyup = (e) => {
            if (shouldCloseOnEsc && e.key === 'Escape') {
                handleRequestClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keyup", handleKeyup);
        }

        return () => {
            if (isOpen) {
                document.removeEventListener("keyup", handleKeyup);
            }
        };
    }, [isOpen, shouldCloseOnEsc, handleRequestClose]);


    // For Body Open Class Name
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add(bodyOpenClassName);
        }

        return () => {
            if (isOpen) {
                document.body.classList.remove(bodyOpenClassName);
            }
        };
    }, [isOpen, bodyOpenClassName]);


    // For HTML Open Class Name
    useEffect(() => {
        if (isOpen) {
            document.documentElement.classList.add(htmlOpenClassName);
        }

        return () => {
            if (isOpen) {
                document.documentElement.classList.remove(htmlOpenClassName);
            }
        };
    }, [isOpen, htmlOpenClassName]);

    // For onAfterOpen
    useEffect(() => {
        const timer = setTimeout(() => {
            if (isOpen && onAfterOpen) {
                onAfterOpen();
            }
            if (!isOpen && onAfterClose) {
                onAfterClose();
            }
        }, closeTimeoutMS);

        return () => clearTimeout(timer);
    }, [isOpen, onAfterOpen, onAfterClose, closeTimeoutMS]);

    // For Render
    if (!isOpen) return null;

    return (
        <>
            <div className={styles.container}>
                <div className={clsx(styles.content, className)}>
                    {/* Close Button */}
                    <button className={styles.closeBtn} onClick={handleRequestClose}>
                        <CircleX />
                    </button>

                    {/* Body children */}
                    <div className={styles.body}>
                        {children}
                    </div>
                </div>

                {/* Overlay */}
                <div
                    className={clsx(styles.overlay, overlayClassName)}
                    onClick={() => {
                        if (shouldCloseOnOverlayClick) {
                            handleRequestClose();
                        }
                    }}
                >

                </div>
            </div>

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