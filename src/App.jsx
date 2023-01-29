import styles from './App.module.scss';
import Heading from './components/Heading/Heading';
import Search from './components/Search/Search';
import Books from './components/Books/Books';
import Paginate from './components/Paginate/Paginate';
import ScrollTo from './components/ScrollTo/ScrollTo';
import { useState, useRef, useEffect } from 'react';
import { fetchData, sortAscending, ITEMS_PER_PAGE } from './UtilsScripts';

const App = () => {
  const searchString = useRef('');
  const loader = useRef(undefined);
  const mainElement = useRef(undefined);
  const resultElement = useRef(undefined);
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
    resultElement.current.className = styles.element_hide;
    loader.current.className = styles.loader;
    searchString.current = stringToSearch;
    getBooks();
  };

  const goToPage = (page) => {
    loader.current.className = styles.loader;
    setPageNumber(page);
  };

  useEffect(() => {
    loader.current.className = '';
    //cannot place resultElement here else ScrollTo will not be displayed
  });

  if (resultElement.current !== undefined) {
    resultElement.current.className = '';
  }

  return (
    <main className={styles.App} ref={mainElement}>
      <header className={styles.App__section_row}>
        <Heading title="Book Hunt" />
        <Search onSearch={handleSearch} placeholder="Search books by title" />
      </header>

      <section ref={loader}></section>

      <section ref={resultElement}>
        {sortedResult === undefined ? (
          <section className={styles.App__section_col}>
            Search and browse through the list of books that match your query.
          </section>
        ) : (
          <section>
            <section className={styles.App__section_row2}>
              <p>Search result for '{searchString.current}'.</p>
              <Paginate
                itemsList={sortedResult}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={pageNumber}
                onPageChange={goToPage}
              />
            </section>
            <Books booksList={sortedResult} currentPage={pageNumber} />
            <ScrollTo goToTop={true} containerElement={mainElement} />
          </section>
        )}
      </section>
    </main>
  );
};

export default App;
