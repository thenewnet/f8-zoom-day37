import { useState } from 'react';
import { Search } from 'lucide-react';

import styles from './SearchForm.module.scss';
import SearchResult from './SearchResult';

function SearchForm() {

    const [isOpen, setIsOpen] = useState(false);

    const titles = ["KHÓA HỌC", "BÀI VIẾT", "VIDEO"];

    const searchResults = titles.map((title, groupIndex) => ({
        title,
        listItems: Array.from({ length: 3 }, (_, i) => ({
            image: `https://placehold.co/48x48?text=${groupIndex + 1}-${i + 1}`,
            name: `${title} Item ${i + 1}`,
            link: '#'
        })),
    })); 
    


    return (
        <>
            <div className={styles.container}>
                <Search className={styles.search_icon} />
                <input type="text"
                    placeholder="Tìm kiếm khóa học, bài viết, video..."
                    className={styles.input}
                    onFocus={() => setIsOpen(true)}
                    onBlur={() => setIsOpen(false)}
                />
                {
                    isOpen && (
                        <div className={styles.results}>
                            {
                                searchResults.map((item, index) => (
                                    <SearchResult title={item.title} listItems={item.listItems} key={index} />
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default SearchForm;