import styles from './Modal.module.scss';

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <article className={styles.Modal}>
      <h4>This is the header</h4>
      <p>This is the body</p>
      <div>
        <button onClick={handleCloseClick}>Close</button>
      </div>
    </article>
  );
};

export default Modal;
