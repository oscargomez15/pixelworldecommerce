import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';

const Cart = () => {
  const {cartItems} = useContext(ShopContext);
  console.log(cartItems);



  return (
    <div className='cart'>
      <h1> Your Cart Items </h1>

      <div className='cartItems'>
        <p> {cartItems[0]} </p>
      </div>
    </div>
  )
}

export default Cart;
