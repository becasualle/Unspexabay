import React from 'react';
import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';

const Search: React.FC = (props) => {
    return (
        <section className={styles.search}>
            <form className={styles.searchForm}>
                <input type="text" placeholder="поиск" className={styles.formInput} />
                <button type="submit" className={styles.submitBtn} >
                    <FaSearch />
                </button>
            </form>
        </section>
    );

}

export default Search;