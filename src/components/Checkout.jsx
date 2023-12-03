import React, { useContext } from 'react'
import { FormField } from './FormField'
import '../checkout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { TotalBox } from '../pages/cart/TotalBox'
import axios from 'axios'
import { ShopContext } from '../context/ShopContext'



export const Checkout = () => {
    const {clearCart} = useContext(ShopContext);

    const contactInfo = [
        {
            labelLink:"firstName",
            label:"First Name",
            type:"text",
            regex:"^[A-Za-z ,.'-]+$",
            error:"Numbers and Symbols are not allowed.",
        },
        {
            labelLink:"lastName",
            label:"Last Name",
            type:"text",
            regex:"^[A-Za-z ,.'-]+$",
            error:"Numbers and Symbols are not allowed.",
        },
        {
            labelLink:"email",
            label:"Email",
            type:"email",
            regex:"[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$",
            error:"Please enter a valid email address."
        },
        {
            labelLink:"phoneNumber",
            label:"Phone Number",
            type:"text",
            regex:"^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
            error:"Enter a valid phone number."
        }
    ]

    const userId = "73FLORI43K641"
    const userPass = "B5556IP99S4636O"
    const xml = `<PriorityMailRequest USERID=${userId}><OriginZip>90201</OriginZip><DestinationZip>21114</DestinationZip></PriorityMailRequest>`
    const url = "https://secure.shippingapis.com/ShippingAPI.dll?API=Verify&XML=" + encodeURIComponent(xml);

    axios.get(url)
    .then((res)=>{
        console.log(url)
        console.log(res.data)
    })

    const handleClick = () => {
        alert("Order has been placed");
    }

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
                {contactInfo.map((item) => {
                        return <FormField
                        labelLink={item.labelLink}
                        label={item.label}
                        type={item.type}
                        regex={item.regex}
                        error={item.error}/>
                    })}
                </div>
            </fieldset>

            <h1> Shipping </h1>
            <fieldset>
                <div className='formSection'>

                    <FormField
                    labelLink="address"
                    label="Address"
                    type="text"/>

                    <div className='formSubsection'>
                        <FormField
                        labelLink="city"
                        label="City"
                        type="text"
                        error="Letters and Symbols are not allowed" />

                        <div className='formField'>
                            <label for='state'> State</label>
                            <input type='text' id='state'></input>
                            <p className='formError'>Symbols and Numbers are not allowed.</p>
                        </div>
                        <div className='formField'>
                            <label for='zip'> Zip </label>
                            <input type='text' id='zip'></input>
                            <p className='formError'>Not a valid Zip Code.</p>
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
            <Link className='placeOrderBtn' to="/thankyou" onClick={clearCart}>
                <p> Place Order </p>
            </Link>
        </div>
        <div className='totalCheckout'>
            <h1> Total </h1>
            <TotalBox/>
        </div>
    </div>
  )
}
