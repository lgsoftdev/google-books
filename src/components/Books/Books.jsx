import Book from '../Book/Book';
//import Modal from '../Modal/Modal';
//import { useState, useEffect, useRef } from 'react';
import styles from './Books.module.scss';
import { cleanBookDetails } from '../../UtilsScripts';

const Books = ({ booksList }) => {
  // const [show, setShow] = useState(false);
  // const [moreBookInfo, setMoreBookInfo] = useState('');
  // const [offsetTop, setOffsetTop] = useState(0);

  // const boxRef = useRef();

  // const handleOpenClick = (bookInfo, position) => {
  //   setOffsetTop(position - 500);
  //   setMoreBookInfo(bookInfo);
  //   setShow(true);
  // };

  // const handleCloseClick = () => {
  //   setShow(false);
  // };

  // useEffect(() => {
  //   boxRef.current.focus();
  // }, []);

  return (
    <section className={styles.Books}>
      {booksList.length > 0 &&
        booksList.map((item, index) => {
          return (
            <Book
              key={index}
              volumeInfo={cleanBookDetails(item)}
              // onOpen={handleOpenClick}
            />
          );
        })}

      {booksList.length === 0 && <label>No results found.</label>}
      {/* <div
        className={styles.modal_container}
        style={{ top: `${offsetTop}px` }}
        ref={boxRef}
      >
        <Modal show={show} onClose={handleCloseClick} />
      </div> */}
    </section>
  );
};

export default Books;
