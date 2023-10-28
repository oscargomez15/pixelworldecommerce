import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { GameCard } from '../../components/GameCard';
import { Loader } from '../../Loader';
import { SearchContext } from '../../Context/SearchContext';
import './Shop.css';


const Shop = () => {

  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  const {modifySearch, getSearch} = useContext(SearchContext);

  console.log(getSearch);

  const apiKey = 'e363bfeec2fc4131bc6e9e8c258d5a99';

  const searchGame = () => {
    setLoading(true);
    axios.get(`https://rawg.io/api/games?search=${getSearch()}&token&key=${apiKey}`)
    .then(res => {
      setGames(res.data.results)
      setLoading(false);
    })
    .catch(error => console.log(error))
  }



  useEffect(()=>{
    searchGame();
      },[getSearch()])

  return (
    <div className='shop'>
        <div className='gamesContainer'>
          {!loading && games.map(game => {
            return <GameCard id={game.id} name={game.name} image={game.background_image} platforms={game.platforms} key={game.name}/>  
          })}
          {loading && <Loader> </Loader>}
        </div>
    </div>
  )
}

export default Shop;