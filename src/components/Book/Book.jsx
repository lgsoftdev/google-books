import styles from './Book.module.scss';
import Modal from '../Modal/Modal';
import ReactDOM from 'react-dom/client';

const Book = ({ volumeInfo }) => {
  const handleOpenClick = (event) => {
    event.preventDefault();
    ReactDOM.createRoot(document.getElementById(volumeInfo.id)).render(
      <Modal />
    );
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
