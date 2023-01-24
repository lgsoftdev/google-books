import { useState } from 'react';
import styles from './Search.module.scss';

const Search = ({ onSearch, placeholder }) => {
  const [searchString, setSearchString] = useState('');

  const handleSearchStringChange = (event) => {
    setSearchString(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchString);
  };

  return (
    <form className={styles.Search} onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={searchString}
        onChange={handleSearchStringChange}
        placeholder={placeholder}
        required
      />
      <div>
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default Search;
