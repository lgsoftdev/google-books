import styles from './App.module.scss';
import Search from './components/Search/Search';
import Books from './components/Books/Books';
import { useState, useRef } from 'react';
import { fetchData, sortAscending } from './UtilsScripts';
import Paginate from './components/Paginate/Paginate';

const App = () => {
  const searchString = useRef('');
  const [sortedResult, setSortedResult] = useState(undefined);
  const [pageNumber, setPageNumber] = useState(1);

  const getBooks = () => {
    const getData = async () => {
      const books = await fetchData(
        `https://www.googleapis.com/books/v1/volumes?q=${searchString.current}+intitle:${searchString.current}&startIndex=0&maxResults=40`
      );

      let searchResult;
      books.totalItems > 0
        ? (searchResult = books.items.map((element) => {
            const item = { ...element.volumeInfo };
            item.id = element.id;
            return item;
          }))
        : (searchResult = []);
      setPageNumber(1);
      setSortedResult(sortAscending(searchResult, 'title'));
    };

    getData();
  };

  const handleSearch = (stringToSearch) => {
    searchString.current = stringToSearch;
    getBooks();
  };

  const goToPage = (page) => {
    setPageNumber(page);
  };

  return (
    <main className={styles.App}>
      <header className={styles.App__section_row}>
        <h2>Book Hunt</h2>
        <Search onSearch={handleSearch} placeholder="Search books by title" />
      </header>

      {sortedResult === undefined ? (
        <section className={styles.App__section_col}>
          Search and browse through the list of books that match your query.
        </section>
      ) : (
        <section>
          <section className={styles.App__section_row2}>
            <p>Search result for '{searchString.current}'.</p>
            <Paginate
              booksList={sortedResult}
              onPageChange={goToPage}
              pageNumber={pageNumber}
            />
          </section>
          <Books booksList={sortedResult} pageNumber={pageNumber} />
        </section>
      )}
    </main>
  );
};

export default App;
