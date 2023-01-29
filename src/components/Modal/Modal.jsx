import styles from './Modal.module.scss';
import imgCloseBtn from '../../assets/close-window-50.png';
import imgTransparent from '../../assets/transparent.png';
import { useEffect, useRef } from 'react';
import { getFormattedDate } from '../../UtilsScripts';

//SOURCE https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOutsideAlerter = (ref, onModalClose) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onModalClose();
      }
    };
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

const Modal = ({ details, onModalClose }) => {
  const modalRef = useRef(undefined);

  const handleCloseClick = (event) => {
    event.preventDefault();
    onModalClose();
  };

  useOutsideAlerter(modalRef, onModalClose);

  return (
    <section className={styles.Modal} ref={modalRef}>
      <header className={styles.Modal__header}>
        <div>
          <h3>{details.title}</h3>
          <h4>{details.subtitle}</h4>
        </div>

        <a onClick={handleCloseClick} href="#">
          <img src={imgCloseBtn} />
        </a>
      </header>
      <div className={styles.grid_col2}>
        <section>
          <p>by {details.authors}</p>
          <p>Publisher: {details.publisher}</p>
          <p>Published Date: {getFormattedDate(details.publishedDate)}</p>
          <p>Categories: {details.categories}</p>
        </section>
        <section>
          <img
            src={
              details.imageLinks.smallThumbnail !== ''
                ? details.imageLinks.smallThumbnail
                : imgTransparent
            }
          />
        </section>
      </div>
      <p>{details.description}</p>
    </section>
  );
};

export default Modal;
