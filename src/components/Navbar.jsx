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

  const search = () => {
    modifySearch(searchInput.current.value);
  }

  const resetSearch = () => {
    clearSearch();
    searchInput.target.value('');
  }

  const handleKeyDown = (e) =>{
    if (e.key === 'Enter') {
      search();
    }
  }

  return (
    <div className='navbar'>
            <div className='searchContainer'>
              <Link to="/pixelworldecommerce" onClick={resetSearch}> PIXEL WORLD </Link>
              <div className='searchBar'> 
                <input type='text' placeholder='Search Games' ref={searchInput} onKeyDown={handleKeyDown}></input>
                <div tabIndex={0} className='searchButton' onClick={search} onKeyDown={handleKeyDown}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} /> 
                </div>
              </div>
            </div>
      <div className='links'>
        <Link to="/pixelworldecommerce"> GAMES </Link>
        <Link to="/cart" className='cartBtn'> CART </Link>
      </div>
    </div>
  )
}

export default Navbar;