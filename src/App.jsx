import styles from './App.module.scss';
import Search from './components/Search/Search';
import Books from './components/Books/Books';
import { useState } from 'react';
import { fetchData, sortAscending } from './UtilsScripts';
import Paginate from './components/Paginate/Paginate';

const App = () => {
  const [searchResult, setSearchResult] = useState(undefined);
  const sortedResult = sortAscending(searchResult, 'title');

  const handleSearch = (searchString) => {
    const getBooks = async () => {
      const books = await fetchData(
        `https://www.googleapis.com/books/v1/volumes?q=${searchString}+intitle:${searchString}&startIndex=0&maxResults=40`
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

    getBooks();
  };

  return (
    <main className={styles.App}>
      <section className={styles.App__section_row}>
        <h2>Book Hunt</h2>
        <Search onSearch={handleSearch} placeholder="Search books by title" />
      </section>
      {sortedResult === undefined ? (
        <section className={styles.App__section_col}>
          Search and browse through the list of books that match your query.
        </section>
      ) : (
        <section>
          <section className={styles.App__section_row2}>
            <p>Search result for 'the quick brown fox jumoed over '.</p>
            <Paginate booksList={sortedResult} />
          </section>
          <Books booksList={sortedResult} />
        </section>
      )}
    </main>
  );
};

export default App;
