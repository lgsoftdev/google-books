import Book from '../Book/Book';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import styles from './Books.module.scss';
import { cleanBookDetails } from '../../UtilsScripts';

const Books = ({ booksList }) => {
  const [show, setShow] = useState(false);
  const [moreBookInfo, setMoreBookInfo] = useState('');

  const handleOpenClick = (bookInfo) => {
    setMoreBookInfo(bookInfo);
    setShow(true);
  };

  const handleCloseClick = () => {
    setShow(false);
  };

  return (
    <section className={styles.Books}>
      {booksList.length > 0 &&
        booksList.map((item, index) => {
          return (
            <Book
              key={index}
              volumeInfo={cleanBookDetails(item)}
              onOpen={handleOpenClick}
            />
          );
        })}

      {booksList.length === 0 && <label>No results found.</label>}
      <div>
        <Modal show={show} onClose={handleCloseClick} />
      </div>
    </section>
  );
};

export default Books;
