import styles from './App.module.scss';
import Heading from './components/Heading/Heading';
import Search from './components/Search/Search';
import Books from './components/Books/Books';
import Paginate from './components/Paginate/Paginate';
import ScrollTo from './components/ScrollTo/ScrollTo';
import Footer from './components/Footer/Footer';
import { useState, useRef, useEffect } from 'react';
import { fetchData, sortAscending, ITEMS_PER_PAGE } from './UtilsScripts';

const App = () => {
  const mainElement = useRef(undefined);
  const [searchString, setSearchString] = useState('');
  const [sortedResult, setSortedResult] = useState(undefined);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getBooks = () => {
    const getData = async () => {
      setIsLoading(true);
      const books = await fetchData(
        `https://www.googleapis.com/books/v1/volumes?q=${searchString}+intitle:${searchString}&startIndex=0&maxResults=40`
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
      setIsLoading(false);
    };

    getData();
  };

  const handleSearch = (stringToSearch) => {
    setSearchString(stringToSearch);
  };

  const goToPage = (page) => {
    setPageNumber(page);
  };

  useEffect(() => {
    if (searchString) getBooks();
  }, [searchString]);

  return (
    <main className={styles.App} ref={mainElement}>
      <section>
        <header className={styles.App__section_row}>
          <Heading title="Book Hunt" />
          <Search onSearch={handleSearch} placeholder="Search books by title" />
        </header>

        {isLoading && <section className={styles.loader}></section>}

        {!isLoading && (
          <section>
            {sortedResult === undefined ? (
              <section className={styles.App__section_col}>
                Search and browse through the list of books that match your
                query.
              </section>
            ) : (
              <section>
                <section className={styles.App__section_row2}>
                  <p>Search result for '{searchString}'.</p>
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
        )}
      </section>
      <Footer />
    </main>
  );
};

export default App;
