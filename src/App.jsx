import styles from './App.module.scss';
import Search from './components/Search/Search';
import Books from './components/Books/Books';
import { useState } from 'react';
import { fetchData } from './UtilsScripts';
//import Modal from './components/Modal/Modal';

const App = () => {
  const [searchResult, setSearchResult] = useState(undefined);

  const handleSearch = async (searchString) => {
    const books = await fetchData(
      'https://www.googleapis.com/books/v1/volumes',
      `q=${searchString}`
    );
    setSearchResult(books.items);
  };

  return (
    <main className={styles.App}>
      <section className={styles.App__section}>
        <h2>Google Books</h2>
        <Search onSearch={handleSearch} />
      </section>
      {searchResult !== undefined && <Books booksList={searchResult} />}
    </main>
  );
};

export default App;
