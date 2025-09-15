import { useState } from 'react';
import styles from './GoToTop.module.scss';
import { useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

function GoToTop() {
    const [isShow, setIsShow] = useState(false);

    const handleToScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    useEffect(() => {
        const handleShowScroll = () => {
            if (window.scrollY >= 300) {
                setIsShow(true);
            } else {
                setIsShow(false);
            }
        };

        document.addEventListener("scroll", handleShowScroll);

        return () => {
            document.removeEventListener("scroll", handleShowScroll);
        };
    }, []);

    return (
        <>
            {isShow && (
                <div className={styles.container} onClick={() => handleToScroll()}>
                    <ArrowUp />
                </div>
            )}
        </>
    )
}

export default GoToTop;