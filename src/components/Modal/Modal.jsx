import styles from './Modal.module.scss';
import { useEffect, useRef } from 'react';
import { getFormattedDate } from '../../UtilsScripts';

//SOURCE https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOutsideAlerter = (ref) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        ref.current.remove();
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

const Modal = ({ volumeInfo }) => {
  const handleCloseClick = () => {
    modalRef.current.remove();
  };

  const modalRef = useRef(null);
  useOutsideAlerter(modalRef);

  return (
    <section className={styles.Modal} ref={modalRef}>
      <header className={styles.Modal__header}>
        <div>
          <h3>{volumeInfo.title}</h3>
          <h4>{volumeInfo.subtitle}</h4>
        </div>

        <a onClick={handleCloseClick} href="#">
          <img src="../../src/assets/close-window-50.png" />
        </a>
      </header>
      <div className={styles.grid_col2}>
        <section>
          <p>by {volumeInfo.authors}</p>
          <p>Publisher:{volumeInfo.publisher}</p>
          <p>Published Date: {getFormattedDate(volumeInfo.publishedDate)}</p>
          <p>Categories: {volumeInfo.categories}</p>
        </section>
        <section>
          <img src={volumeInfo.imageLinks.smallThumbnail} />
        </section>
      </div>
      <div>
        <p>{volumeInfo.description}</p>
        <aside></aside>
      </div>
    </section>
  );
};

export default Modal;
