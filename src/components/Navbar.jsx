import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { SearchContext } from '../Context/SearchContext';
import '../navbar.css';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
            <div className='searchContainer'>
              <Link to="/" onClick={resetSearch}> PIXEL WORLD </Link>
              <div className='searchBar'> 
                <input type='text' placeholder='Search Games' onChange={handleChange} ref={searchInput}></input>
                <div className='searchButton'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} /> 
                </div>
              </div>
            </div>
      <div className='links'>
        <Link to="/"> GAMES </Link>
        <Link to="/cart" className='cartBtn'> CART </Link>
      </div>
    </div>
  )
}

export default Navbar;