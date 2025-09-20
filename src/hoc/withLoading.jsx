import { Loader } from "lucide-react";
import styles from './withLoading.module.scss';

function withLoading(WrappedComponent) {
    const wrappedComponent = ({ isLoading }) => {

        return (
            <>
                {
                    isLoading ? (
                        <div className={styles.container} >
                            <div className={styles.loadingIcon}>
                                <Loader />
                            </div>
                        </div >
                    ) : (
                        <WrappedComponent />
                    )
                }
            </>
        );
    };

    return wrappedComponent;
}
export default withLoading;