import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

import './SearchBar.css';

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <form className='search-bar'>
      <button type='submit' className='button-header'>
        <IoIosSearch/>
      </button>
      <input
        type="search"
        value={searchValue}
        placeholder='Search'
        className='search__input'
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
    </form>
  );
}

export default SearchBar;