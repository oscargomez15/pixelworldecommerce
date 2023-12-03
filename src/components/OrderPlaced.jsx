import React, { useEffect } from 'react'
import '../orderConfirmed.css'
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

export const OrderPlaced = () => {
  const {getCartTax, getCartSubtotal, getTotal, receipt} = useContext(ShopContext);

  useEffect( () => {
    window.scrollTo(
      {top:0, behavior:"smooth"}
    )
  },[])

  return (
    <div className='orderConfirmed'>
        <h1> Thank you for your purchase. </h1>
        <p className='orderNumber'> Order Number # {Math.floor(Math.random() * (2000 - 1000) ) + 1000} </p>
        <p> Your order has been placed. You can find your receipt here:</p>
        <div className='receiptItems'>
          <h1> Pixel World </h1>

        {receipt?.map((item) => {
          return(
              <div className='receiptRow'>
                <p className='leftColumn'>{item.name}</p>
                <p className='rightColumn'>${item.gamePrice}</p>
              </div>
          )
        })}
        <div className='receiptRow division'>
          <p className='leftColumn'> Subtotal </p>
          <p className='rightColumn'>${getCartSubtotal(receipt)}</p>
        </div>

        <div className='receiptRow'>
          <p className='leftColumn'> Taxes </p>
          <p className='rightColumn'> ${getCartTax(receipt)}</p>
        </div>

        <div className='receiptRow division'>
          <p className='leftColumn'> Amount Paid </p>
          <p className='rightColumn'>${getTotal(receipt)}</p>
        </div>
      </div>
      <Link to="/" > Return to games </Link>
    </div>
  )
}
