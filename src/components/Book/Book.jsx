import styles from './Book.module.scss';
import Modal from '../Modal/Modal';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const Book = ({ volumeInfo }) => {
  const handleOpenClick = (event) => {
    event.preventDefault();

    const root = ReactDOM.createRoot(document.getElementById(volumeInfo.id));
    root.render(<Modal volumeInfo={volumeInfo} />);
  };

  try {
    return (
      <article className={styles.Book}>
        <figure>
          <a onClick={handleOpenClick} href="#">
            <img src={volumeInfo.imageLinks.smallThumbnail} />
          </a>
        </figure>
        <div>
          <a
            className={styles.truncate_overflow}
            onClick={handleOpenClick}
            href="#"
          >
            <h3>{volumeInfo.title}</h3>
          </a>

          <h5>by {volumeInfo.authors}</h5>
          <p>{volumeInfo.description}</p>
        </div>
        <div id={volumeInfo.id}></div>
      </article>
    );
  } catch (err) {
    console.log(err.message);
    console.log('ERROR FOUND!!!', volumeInfo);
  }
};

export default Book;
