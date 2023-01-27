import { useRef } from 'react';
import styles from './Search.module.scss';

const Search = ({ onSearch, placeholder }) => {
  const searchString = useRef('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchString.current.value);
    searchString.current.value = '';
    searchString.current.focus();
  };

  return (
    <form className={styles.Search} onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        required
        ref={searchString}
      />
      <div>
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default Search;
