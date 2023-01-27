import Book from '../Book/Book';
import styles from './Books.module.scss';
import { cleanBookDetails } from '../../UtilsScripts';

const Books = ({ booksList, pageNumber }) => {
  const itemsPerPage = 10;
  const upperLimit = pageNumber * itemsPerPage;
  let booksListCopy;

  if (booksList.length > 0) {
    booksListCopy = booksList.slice(upperLimit - itemsPerPage, upperLimit);
  }

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
