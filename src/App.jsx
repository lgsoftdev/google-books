import styles from './App.module.scss';
import Search from './components/Search/Search';
import Books from './components/Books/Books';
import { useState } from 'react';
import { fetchData, sortAscending } from './UtilsScripts';
//import Modal from './components/Modal/Modal';

const App = () => {
  const [searchResult, setSearchResult] = useState(undefined);
  const sortedResult = sortAscending(searchResult, 'title');

  const handleSearch = async (searchString) => {
    const books = await fetchData(
      `https://www.googleapis.com/books/v1/volumes?q=${searchString}+intitle:${searchString}`
    );
    setSearchResult(
      books.totalItems > 0
        ? books.items.map((element) => {
            const item = { ...element.volumeInfo };
            item.id = element.id;
            return item;
          })
        : []
    );
  };

  return (
    <main className={styles.App}>
      <section className={styles.App__section}>
        <h2>Google Books</h2>
        <Search onSearch={handleSearch} placeholder="Search books by title" />
      </section>
      {sortedResult !== undefined && <Books booksList={sortedResult} />}
    </main>
  );
};

export default App;
