import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import './Cart.css'

const Cart = () => {
  const {cartItems, addOneToQuantity, removeOneToQuantity} = useContext(ShopContext);
  console.log(cartItems);

  return (
    <div className='cart'>
      <h1> Your Cart Items </h1>

      <div className='cartItems'>
        {cartItems.map((item) => {
          return (
          <div className='cartItem'> 
            <img src={item.gameImage} alt={item.gameName}></img>
            <div className='cartItemTitle'>
              <p className='itemTitle'>{item.name}</p>
              <hr></hr>
              <div className='cartItemInfo'>
                <p className='priceText infoBox'> <span className='infoText'> $15.99</span></p>
                <div className='quantityContainer'>
                      <span className='modifyQuantity' onClick={() => removeOneToQuantity(item.id)}>-</span>
                      <span className='infoText'> Quantity </span> : {item.quantity}
                      <span className='modifyQuantity' onClick={() => addOneToQuantity(item.id)}>+</span>
                </div>
                <a href='#' className='removeBtn'> <span className='infoText'> X </span> Remove from Cart </a>
              </div>
            </div>
          </div>
          )
        })}
      </div>
      <a href='#' className='checkoutBtn'>
        <p> Proceed to Checkout</p>
      </a>
    </div>
  )
}

export default Cart;
