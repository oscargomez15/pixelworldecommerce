import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { GameCard } from '../../components/GameCard';
import './Shop.css';
const Shop = () => {

  const [games, setGames] = useState([]);
  const [search, setSearch] = useState('');

  const apiKey = 'e363bfeec2fc4131bc6e9e8c258d5a99';

  const searchGame = (gameName) => {
    axios.get(`https://rawg.io/api/games?search=${search}&token&key=${apiKey}`)
    .then(res => {
      setGames(res.data.results)
    })
    .catch(error => console.log(error))
    console.log(search);
  }

const handleChange = (e) => {
  setSearch(e.target.value);
}

  useEffect(()=>{
    searchGame();
      },[search])

  return (
    <div className='shop'>
        <div className='shopTitle'>
            <div className='searchBar'>
             <h1> Pixel World Store </h1>
              <input type='text' onChange={handleChange} placeholder='Search Games'></input>
            </div>
        </div>


        <div className='gamesContainer'>
          {games.map(game => {
            return <GameCard id={game.id} name={game.name} image={game.background_image} platforms={game.platforms} key={game.name}/> 
          })}
        </div>
    </div>
  )
}

export default Shop;