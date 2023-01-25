import styles from './Paginate.module.scss';

const Paginate = ({ booksList }) => {
  const pages = parseInt(booksList.length / 10);

  if (pages === 0) return null;

  const pagesArr = new Array(pages).fill(0);
  console.log(pagesArr);

  return (
    <div className={styles.Paginate}>
      <label>Page</label>
      <select>
        {pagesArr.map((item, index) => {
          console.log('index', index);
          return <option key={index}>{index + 1}</option>;
        })}
      </select>
    </div>
  );
};

export default Paginate;
