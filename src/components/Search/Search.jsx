import { useState } from 'react';
import { fetchData } from '../../Helpers';
import styles from './Search.module.scss';

const Search = ({ onSearch }) => {
  const [searchString, setSearchString] = useState('');

  const handleSearchStringChange = (event) => {
    setSearchString(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const data = await fetchData(
      'https://www.googleapis.com/books/v1/volumes',
      `q=${searchString}`
    );
    onSearch(data.items);
  };

  return (
    <form className={styles.Search} onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={searchString}
        onChange={handleSearchStringChange}
        placeholder="Enter search string"
        required
      />
      <div>
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default Search;
