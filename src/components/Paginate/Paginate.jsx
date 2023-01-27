import styles from './Paginate.module.scss';

const Paginate = ({ itemsList, itemsPerPage, currentPage, onPageChange }) => {
  const remainder = itemsList.length % itemsPerPage > 0 ? 1 : 0;
  const numberOfPages = parseInt(itemsList.length / itemsPerPage) + remainder;
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
