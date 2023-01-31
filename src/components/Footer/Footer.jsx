import styles from './Footer.module.scss';
import { getCurrentYear } from '../../UtilsScripts';

const Footer = () => {
  const year = getCurrentYear();
  return (
    <footer className={styles.Footer}>
      <div>Built in React, SCSS and JavaScript</div>
      <div>by Lynn G</div>
      <div>Copyright &copy; 2023 - {year}</div>
    </footer>
  );
};

export default Footer;
