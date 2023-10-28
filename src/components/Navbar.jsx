import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { SearchContext } from '../Context/SearchContext';
import '../navbar.css';
import { useRef } from 'react';

const Navbar = () => {
  const {modifySearch, clearSearch} = useContext(SearchContext);
  const searchInput = useRef();

  const handleChange = (e) => {
    modifySearch(e.target.value);
  }

  const resetSearch = () => {
    clearSearch();
    searchInput.target.value('');
  }

  return (
    <div className='navbar'>
            <div className='searchBar'>
             <h1> PIXEL WORLD </h1>
              <input type='text' placeholder='Search Games' onChange={handleChange} ref={searchInput}></input>
            </div>
      <div className='links'>
        <Link to="/"> GAMES </Link>
        <Link to="/cart" className='cartBtn' onClick={resetSearch}> CART </Link>
      </div>
    </div>
  )
}

export default Navbar;