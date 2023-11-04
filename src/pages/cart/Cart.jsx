import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext';
import './Cart.css'
import { CartItem } from './CartItem';

const Cart = () => {
  const {cartItems, getCartSubtotal, getCartTax, getTotal} = useContext(ShopContext);

  return (
    <div className='cartContainer'>
        {cartItems.length > 0 ? 
        <div className='cart'>
          <div className='cartItems'>
          <h1> Your Cart Items </h1>
          {cartItems.map((item)=>{
            return <CartItem id={item.id} name={item.name} image={item.gameImage} quantity={item.quantity} price={item.gamePrice} key={item.name}/>
          })}
          
          </div>
               
            <div className='breakdownContainer'>
              <h1> Total </h1>
            <div className='breakdown'>
              {cartItems.map((item)=>{
                return (
                  
                <div className='itemRow' key={item.name}>
                  <p>{item.name} (x {item.quantity}) </p> 
                  <p> ${item.gamePrice}</p>
                </div>)

              })}

              <div className='itemRow divider'>
                <p> Subtotal ( {cartItems.length} Items )</p>
                <p> ${getCartSubtotal()} </p>
              </div>

              <div className='itemRow'>
                <p> Pixel County Tax (6.5%)</p>
                <p> ${getCartTax()} </p>
              </div>


              <div className='itemRow divider'>
                <p> <strong>Total</strong> </p>
                <p> <strong>${getTotal()}</strong></p>
              </div>

              </div>

              <p className='checkoutBtn'> Proceed to Checkout</p>

          </div>


      </div> : <h1 className='emptyCart'> You cart is empty</h1>}
    </div>
  )
}

export default Cart;
