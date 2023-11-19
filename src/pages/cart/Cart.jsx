import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext';
import './Cart.css'
import { CartItem } from './CartItem';
import {Link } from 'react-router-dom';
import { TotalBox } from './TotalBox';

const Cart = () => {
  const {cartItems, getCartSubtotal, getCartTax, getTotal} = useContext(ShopContext);

  return (
    <div className='cartContainer'>
        {cartItems?.length > 0 ? 
        <div className='cart'>
          <div className='cartItems'>
          <h1> Your Cart Items </h1>
          {cartItems.map((item)=>{
            return <CartItem id={item.id} name={item.name} image={item.gameImage} quantity={item.quantity} price={item.gamePrice} key={item.name}/>
          })}
          
          </div>
               
            <div className='breakdownContainer'>
              <h1> Total </h1>
              <TotalBox></TotalBox>
              <Link to='/checkout' className='checkoutBtn' onClick={() => {window.scrollTo({top:0,behavior:'smooth'})}}>
                Proceed to Checkout
              </Link>
          </div>
      </div> :
      <div>
        <h1 className='emptyCart'> You cart is empty </h1>
      </div> 
      
      }
    </div>
  )
}

export default Cart;
