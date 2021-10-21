import React from 'react';
import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { AppContext } from '../context';

const Search = () => {
    const appContext = React.useContext(AppContext);
    // const {handleChange} = appContext;
    const handleChange = appContext?.handleChange;
    const query = appContext?.state.query;
    return (
        <section className={styles.search}>
            <form className={styles.searchForm}>
                <input type="text" placeholder="поиск" className={styles.formInput} value={query} onChange={handleChange} />
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