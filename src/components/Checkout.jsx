import React from 'react'
import '../checkout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { TotalBox } from '../pages/cart/TotalBox'
import axios from 'axios'

export const Checkout = () => {
    const userId = "73FLORI43K641"
    const userPass = "B5556IP99S4636O"
    const xml = `<PriorityMailRequest USERID=${userId}><OriginZip>90201</OriginZip><DestinationZip>21114</DestinationZip></PriorityMailRequest>`
    const url = "https://secure.shippingapis.com/ShippingAPI.dll?API=Verify&XML=" + encodeURIComponent(xml);

    axios.get(url)
    .then((res)=>{
        console.log(url)
        console.log(res.data)
    })

  return (
    <div className='checkoutContainer'>
        <div className='checkoutForm'>
            <div className='formHeading'> 
                <Link to="/cart">
                    <div className='returnArrow'>
                        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                    </div>
                </Link>
                <h1> Contact </h1>
            </div>
            <fieldset>
                <div className='formSection'>
                    <div className='formField'>
                        <label for='firstName'> First Name </label>
                        <input type='text' id='firstName'></input>
                    </div>

                    <div className='formField'>
                        <label for='lastName'> Last Name </label>
                        <input type='text' id='lastName'></input>
                    </div>

                    <div className='formField'>
                        <label for='phoneNumber'> Phone Number </label>
                        <input type='text' id='phoneNumber'></input>
                    </div>
                </div>
            </fieldset>

            <h1> Shipping </h1>
            <fieldset>
                <div className='formSection'>
                    <div className='formField'>
                        <label for='address'> Address </label>
                        <input type='text' id='address'></input>
                    </div>


                    <div className='formSubsection'>
                        <div className='formField'>
                            <label for='city'> City</label>
                            <input type='text' id='city'></input>
                        </div>

                        <div className='formField'>
                            <label for='state'> State</label>
                            <input type='text' id='state'></input>
                        </div>
                        <div className='formField'>
                            <label for='zip'> Zip </label>
                            <input type='text' id='zip'></input>
                        </div>
                    </div>

                </div>
            </fieldset>

            <h1> Payment </h1>
            <fieldset disabled>
                <div className='formSection'>
                    <div className='formField'>
                        <label for='cardholder'> Name on Card </label>
                        <input type='text' id='cardholder'></input>
                    </div>

                    <div className='formField'>
                        <label for='cardNumber'> Credit Card Number </label>
                        <input type='text' id='cardNumber'></input>
                    </div>
                    
                    <div className='formSubsection'>
                        <div className='formField'>
                            <label for='expiration'> Expiration date </label>
                            <input type='text' id='expiration'></input>
                        </div>

                        <div className='formField'>
                            <label for='cvc'> CVC </label>
                            <input type='text' id='cvc'></input>
                        </div>
                    </div>
                </div>
            </fieldset>

            <div className='placeOrderBtn'> 
                <p> Place Order </p>
            </div>
        </div>
        <div className='totalCheckout'>
            <h1>Total </h1>
            <TotalBox/>
        </div>
    </div>
  )
}
