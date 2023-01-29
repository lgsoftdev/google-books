import styles from './Paginate.module.scss';
import { getNumberOfGroups } from '../../UtilsScripts';

const Paginate = ({ itemsList, itemsPerPage, currentPage, onPageChange }) => {
  const numberOfPages = getNumberOfGroups(itemsList, itemsPerPage);
  const pagesArray = new Array(numberOfPages).fill(0);

  const handlePageChange = (event) => {
    onPageChange(event.target.value);
  };

  return (
    <>
      {numberOfPages >= 1 && (
        <div className={styles.Paginate}>
          <label>Page</label>
          <select value={currentPage} onChange={handlePageChange}>
            {pagesArray.map((item, index) => {
              return <option key={index}>{index + 1}</option>;
            })}
          </select>
        </div>
      )}
    </>
  );
};

export default Paginate;
