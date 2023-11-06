import React, { useContext } from 'react'
import './GameCard.css'
import { ShopContext } from '../Context/ShopContext'

export const GameCard = ({id, name, image, platforms, release}) => {
    const {addToCart, cartItems} = useContext(ShopContext);

    const itemAmount = cartItems.find(item => item.id === id)?.quantity;

    const releaseYear = new Date(release).getFullYear();
    let priceBasedOnRelease = 0;

    if(releaseYear < 2000){
        priceBasedOnRelease = 75.99;
    }else{
        priceBasedOnRelease = 59.99;
    }

    const handleClick = (e) => {
        e.target.classList.add("platform-name-selected");
    }
    
  return (
    <div className='gameCard'>
        <h1 className='gameTitle'>{name}</h1>
        <img src={image} alt={name} className='gameImage'></img>
        <p className='gamePrice'>${priceBasedOnRelease}</p>
        <div className='platforms'> 
            <p>Choose the Platform:</p>
            <div className='platforms-list'>
                {platforms?.map(platform => {
                    return <h1 className='platform-name' key={platform.platform.name} onClick={handleClick}> {platform.platform.name} </h1>
                })}
            </div>
        </div> 

        <div className='cardButtonSection'>
            <button tabIndex='0' className='addToCart' onClick={() => addToCart(id,name,image, priceBasedOnRelease)}> Add to Cart </button>
                {itemAmount > 0 &&  <div className='quantity'> <p> {itemAmount} </p></div>}   
        </div>
    </div>
  )
}
