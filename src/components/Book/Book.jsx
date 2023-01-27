import styles from './Book.module.scss';
import Modal from '../Modal/Modal';
import ReactDOM from 'react-dom/client';
import { useRef } from 'react';

const Book = ({ volumeInfo }) => {
  const rootObject = useRef(undefined);

  const handleModalOpen = (event) => {
    event.preventDefault();

    rootObject.current = ReactDOM.createRoot(
      document.getElementById(volumeInfo.id)
    );
    rootObject.current.render(
      <Modal details={volumeInfo} onModalClose={handleModalClose} />
    );
  };

  const handleModalClose = () => {
    rootObject.current.unmount();
  };

  return (
    <article className={styles.Book}>
      <figure>
        <a onClick={handleModalOpen} href="#">
          <img src={volumeInfo.imageLinks.smallThumbnail} />
        </a>
      </figure>
      <div>
        <a
          className={styles.truncate_overflow}
          onClick={handleModalOpen}
          href="#"
        >
          <h3>{volumeInfo.title}</h3>
        </a>

        <h5>by {volumeInfo.authors}</h5>
        <p>{`${volumeInfo.description}`}</p>
      </div>
      <div id={volumeInfo.id}></div>
    </article>
  );
};

export default Book;
