import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { GameCard } from '../../components/GameCard';
import { Loader } from '../../Loader';
import { SearchContext } from '../../Context/SearchContext';
import { faCartShopping, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import './Shop.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ShopContext } from '../../Context/ShopContext';

const Shop = () => {

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const {getSearch} = useContext(SearchContext);
  const {lastGameAdded, isAlertVisible} = useContext(ShopContext);
  const [page, setPage] = useState(1);
  
  const apiKey = 'e363bfeec2fc4131bc6e9e8c258d5a99';

  const searchGame = () => {
    setLoading(true);
    axios.get(`https://rawg.io/api/games?search=${getSearch()}&token&key=${apiKey}&page_size=16&page=${page}`)
    .then(res => {
      setGames(res.data.results)
      setLoading(false);
    })
    .catch(error => console.log(error))
  }

  const resetPage = () => {
    setPage(1);
  }

  const nextPage = () =>{
    setPage(page + 1)
    console.log(page);
    window.scrollTo({top:0, behavior:'smooth'})
  }

  const prevPage = () =>{
    setPage(page - 1)
    console.log(page);
    window.scrollTo({top:0, behavior:'smooth'})
  }


  useEffect(()=>{
    searchGame();
      },[getSearch(), page])

  return (
    <div className='shop'>
        <div className='gamesContainer'>
          {!loading && games.map(game => {
            return <GameCard 
            id={game.id} 
            name={game.name} 
            image={game.background_image} 
            platforms={game.platforms} 
            release={game.released} 
            key={game.name}/>  
          })}
          {loading && <Loader> </Loader>}
        </div>

        {isAlertVisible && 
        <div className='addedModal'>
          <FontAwesomeIcon icon={faCartShopping} size='xl' bounce />
          <p> {lastGameAdded} has been added to your cart. </p>
        </div>}

        <div className='pagination'>
          {page > 1 ?
              <div className='pageBtn' onClick={prevPage}> Previous </div>
              : <div></div>}
          <div className='pageBtn' tabIndex='0' onClick={nextPage}> Next </div>
        </div>
    </div>
  )
}

export default Shop;