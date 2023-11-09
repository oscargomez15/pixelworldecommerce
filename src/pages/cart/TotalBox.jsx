import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

export const TotalBox = () => {
    const {cartItems, getCartSubtotal, getCartTax, getTotal} = useContext(ShopContext);

  return (
    <div>
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
    </div>
  )
}
