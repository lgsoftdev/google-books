import Book from '../Book/Book';
import styles from './Books.module.scss';
import { cleanBookDetails, ITEMS_PER_PAGE } from '../../UtilsScripts';

const Books = ({ booksList, currentPage }) => {
  const itemsPerPage = ITEMS_PER_PAGE;
  const upperLimit = currentPage * itemsPerPage;
  const lowerLimit = upperLimit - itemsPerPage;
  let booksListCopy;

  if (booksList.length > 0)
    booksListCopy = booksList.slice(lowerLimit, upperLimit);

  return (
    <section className={styles.Books}>
      {booksList.length > 0 &&
        booksListCopy.map((item, index) => {
          return <Book key={index} volumeInfo={cleanBookDetails(item)} />;
        })}

      {booksList.length === 0 && (
        <label className={styles.warning}>No results found.</label>
      )}
    </section>
  );
};

export default Books;
