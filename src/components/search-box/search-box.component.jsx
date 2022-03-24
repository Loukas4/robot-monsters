import React from 'react';

import './search-box.styles.css';

 const SearchBox = ({onSearchChange}) => {
  return (
  <input 
    className= 'search'
    type='search' 
    placeholder= 'Search monsters'
    onChange={onSearchChange} 
  />
);
}

export default SearchBox;