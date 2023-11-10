import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';
import '../navbar.css';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const {modifySearch, clearSearch} = useContext(SearchContext);
  const {cartItems} = useContext(ShopContext);
  const searchRef = useRef();
  const [inputLength, setInputLength] = useState(0);

  const search = () => {
    modifySearch(searchRef.current.value);
    scrollToTop();
  }

  const resetSearch = () => {
    searchRef.current.value = '';
    setInputLength(0);
    searchRef.current.focus();
  }

  const handleKeyDown = (e) =>{
    if (e.key === 'Enter') {
      search();
      searchRef.current.blur();
    }
  }

  const scrollToTop = () => {
    window.scrollTo({top:0, behavior:'smooth'})
  }

  const resetAndScroll = () => {
    scrollToTop();
    resetSearch();
    modifySearch('');
  }

  const handleChange = () => {
    setInputLength(searchRef.current.value.length);
  }

  return (
    <div className='navbar'>

            <div className='searchContainer'>
              <Link to="/" onClick={resetAndScroll}> PIXEL WORLD </Link>
              <div className='searchBar'> 
                {inputLength > 0 ? <p onClick={resetSearch} className='clearSearch'> X </p> : <></>}
                <input type='text' placeholder='Search Games' ref={searchRef} onKeyDown={handleKeyDown} onChange={handleChange} autoFocus></input>
                <div tabIndex={0} className='searchButton' onClick={search} onKeyDown={handleKeyDown}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} /> 
                </div>
              </div>
            </div>

      <div className='links'>
        <Link to="/" onClick={resetAndScroll}> GAMES </Link>
        <Link to="/cart" className='cartBtn' onClick={resetAndScroll}> CART { cartItems.length > 0 && <sup className='itemsCount'>{cartItems.length}</sup>} </Link>
      </div>

    </div>
  )
}

export default Navbar;