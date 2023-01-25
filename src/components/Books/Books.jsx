import Book from '../Book/Book';
//import Modal from '../Modal/Modal';
//import { useState, useEffect, useRef } from 'react';
import styles from './Books.module.scss';
import { cleanBookDetails } from '../../UtilsScripts';

const Books = ({ booksList }) => {
  return (
    <section className={styles.Books}>
      {booksList.length > 0 &&
        booksList.map((item, index) => {
          return <Book key={index} volumeInfo={cleanBookDetails(item)} />;
        })}

      {booksList.length === 0 && (
        <label className={styles.warning}>No results found.</label>
      )}
    </section>
  );
};

export default Books;
