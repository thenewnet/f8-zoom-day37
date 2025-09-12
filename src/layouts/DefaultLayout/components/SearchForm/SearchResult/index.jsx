import PropTypes from 'prop-types';
import { Link } from 'react-router';

import styles from './SearchResult.module.scss';

function SearchResult({ title, listItems }) {
    return (
        <div className={styles.searchResults}>
            <div className={styles.title_wrapper}>
                <h3 className={styles.title}>{title}</h3>
                <Link className={styles.view_all}>Xem thêm</Link>
            </div>
            <div className={styles.items}>
                {
                    listItems.map((item, index) => (
                        <Link to={item.link} key={index}>
                            <div className={styles.item} key={index}>
                                <img src={item.image} alt='image' className={styles.image} />
                                <p className={styles.name}>{item.name}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

PropTypes.SearchResult = {
    title: PropTypes.string,
    listItems: PropTypes.node,
};

export default SearchResult;
