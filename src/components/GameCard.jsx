import React, { useContext } from 'react'
import './GameCard.css'
import { ShopContext } from '../Context/ShopContext'

export const GameCard = ({id, name, image, platforms}) => {
    const {addToCart, cartItems} = useContext(ShopContext);

    const itemAmount = cartItems[id];
    
  return (
    <div className='gameCard'>
        <h1 className='gameTitle'>{name}</h1>
        <img src={image} className='gameImage'></img>
        <div className='platforms'> 
            <p>Choose the Platform:</p>
            <div className='platforms-list'>
                {platforms?.map(platform => {
                    return <h1 className='platform-name'> {platform.platform.name} </h1>
                })}
            </div>
        </div> 

        <div className='cardButtonSection'>
            <button className='addToCart' onClick={() => addToCart(id)}> Add to Cart </button>
                {itemAmount > 0 &&  <div className='quantity'> <p> {itemAmount} </p></div>}   
        </div>
    </div>
  )
}
