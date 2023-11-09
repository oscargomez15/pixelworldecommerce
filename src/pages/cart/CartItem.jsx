import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';


export const CartItem = ({id, name, image, quantity, price}) => {
    const {cartItems, addOneToQuantity, deleteFromCart, removeOneToQuantity} = useContext(ShopContext);

  return (
    <div className='cartItem'> 
    <img src={image} alt={name}></img>
    <div className='cartItemTitle'>
      <p className='itemTitle'>{name}</p>
      <hr></hr>
      <div className='cartItemInfo'>
        <p className='priceText infoBox'> <span className='infoText'> ${price}</span></p>
        <div className='quantityContainer'>
              <span className='modifyQuantity' onClick={() => removeOneToQuantity(id)}>-</span>
              <span className='infoText'> Quantity: </span> {quantity}
              <span className='modifyQuantity' onClick={() => addOneToQuantity(id)}>+</span>
        </div>
        <p className='removeBtn' onClick={() => deleteFromCart(id)}> <span className='infoText'> X </span> Remove </p>
      </div>
    </div>
  </div>
  )
}
