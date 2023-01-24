import styles from './Book.module.scss';

const Book = ({ volumeInfo, onOpen }) => {
  const handleOpenClick = () => {
    onOpen(volumeInfo);
  };

  try {
    return (
      <article className={styles.Book}>
        <figure>
          <img src={volumeInfo.imageLinks.smallThumbnail} />
        </figure>
        <div>
          <h3>
            <a
              className={styles.truncate_overflow}
              onClick={handleOpenClick}
              href="#"
            >
              {volumeInfo.title}
            </a>
          </h3>
          <h5>by {volumeInfo.authors}</h5>
          <p>{volumeInfo.description}</p>
        </div>
      </article>
    );
  } catch (err) {
    console.log('ERROR FOUND!!!', volumeInfo);
  }
};

export default Book;
