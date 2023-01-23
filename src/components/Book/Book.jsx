import styles from './Book.module.scss';

const Book = ({ details, onOpen }) => {
  const handleOpenClick = () => {
    onOpen(details);
  };

  return (
    <article className={styles.Book}>
      <figure>
        {details.volumeInfo.imageLinks !== undefined && (
          <img src={details.volumeInfo.imageLinks.smallThumbnail} />
        )}
        {details.volumeInfo.imageLinks === undefined && (
          <img src="../src/assets/transparent.png" />
        )}
      </figure>
      <div>
        <h3>
          <a onClick={handleOpenClick} href="#">
            {details.volumeInfo.title}
          </a>
        </h3>
        <h5>
          {details.volumeInfo.authors !== undefined &&
            'by ' + details.volumeInfo.authors.join(', ')}
        </h5>
        <p>{details.volumeInfo.description}</p>
      </div>
    </article>
  );
};

export default Book;
