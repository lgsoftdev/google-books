import styles from './Modal.module.scss';
import { useState, useEffect, useRef } from 'react';

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

const Modal = () => {
  const handleCloseClick = () => {
    modalRef.current.remove();
  };

  const modalRef = useRef(null);
  useOutsideAlerter(modalRef);

  return (
    <section className={styles.Modal} ref={modalRef}>
      <div>
        <h4>This is the header</h4>
        <button onClick={handleCloseClick}>X</button>
      </div>
      <p>This is the body</p>
    </section>
  );
};

export default Modal;
