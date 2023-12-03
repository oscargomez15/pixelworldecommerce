import React, { useContext, useState, useRef, useEffect } from 'react'

import { Link } from 'react-router-dom';
import '../navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { ShopContext } from '../context/ShopContext';
import { SearchContext } from '../context/SearchContext';
import { DataContext } from '../context/DataContext';

import axios from 'axios';


const Navbar = () => {
  const {modifySearch, clearSearch, getSearch} = useContext(SearchContext);
  const {cartItems} = useContext(ShopContext);
  const {setData, data} = useContext(DataContext);
  const searchRef = useRef();

  const [isDropdownEnabled, setDropdown] = useState(false);
  const [inputLength, setInputLength] = useState(0);

  const apiKey = 'e363bfeec2fc4131bc6e9e8c258d5a99';

  const search = () => {
    modifySearch(searchRef.current.value);
    scrollToTop();
    setDropdown(false);
  }

  const suggestionSearch = (item) => {
    searchRef.current.value = item;
    setDropdown(false);
    search();
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
    axios.get(`https://rawg.io/api/games?search=${searchRef.current.value}&token&key=${apiKey}&page_size=8`)
    .then(res => {
      setData(res.data.results)
    })
    .catch(error => console.log(error))
  }

  const handleFocus = () => {
    setDropdown(true);
    setData([]);
  }

  const handleBlur = () => {
    setTimeout(() => {
      setDropdown(false)}, 1000);
  }

  useEffect (() => {
    handleChange()
  },[]
  )

  return (
    <div className='navbar'>
            <Link to="/" onClick={resetAndScroll}> PIXEL WORLD </Link>
            <div className='searchContainer'>
              <div className='searchBar'>
                {inputLength > 0 ? <p onClick={resetSearch} className='clearSearch'> X </p> : <></>}
                <input type='text' placeholder='Search Games' ref={searchRef} onKeyDown={handleKeyDown} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}></input>
                <div tabIndex={0} className='searchButton' onClick={search} onKeyDown={handleKeyDown}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
              </div>
              {isDropdownEnabled && <div className='dropdown'>
                {data?.map((item) => {
                  return <p className='suggestionRow' onClick={() => {suggestionSearch(item.name)}}> {item.name} </p>
                })}
               </div>}
            </div>

      <div className='links'>
        <Link to="/" onClick={resetAndScroll}> GAMES </Link>
        <Link to="/cart" className='cartBtn' onClick={resetAndScroll}> CART { cartItems?.length > 0 && <sup className='itemsCount'>{cartItems.length}</sup>} </Link>
      </div>

    </div>
  )
}

export default Navbar;