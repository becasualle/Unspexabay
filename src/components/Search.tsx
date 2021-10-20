import React from 'react';
import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';

type SearchProps = {
    query: string;
}

const Search = ({ query }: SearchProps) => {
    return (
        <section className={styles.search}>
            <form className={styles.searchForm}>
                <input type="text" placeholder="поиск" className={styles.formInput} />
                <button type="submit" className={styles.submitBtn} >
                    <FaSearch />
                </button>
            </form>
            <button className={styles.btnFilter}>Моя коллекция</button>
        </section>
    );

}
// https://ru.reactjs.org/docs/thinking-in-react.html
// https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks#usereducer
// https://github.com/piotrwitek/react-redux-typescript-guide#react--redux-in-typescript---complete-guide

export default Search;