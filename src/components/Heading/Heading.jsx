import styles from './Heading.module.scss';

const Heading = ({ title }) => {
  return <h2 className={styles.Heading}>{title}</h2>;
};

export default Heading;
