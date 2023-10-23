import React, { createContext, useState } from 'react'

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (itemId) => {
        if(cartItems.hasOwnProperty(itemId)){
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
        }else{
            setCartItems((prev) => ({...prev, [itemId]:  1}))
        }
    }


    const removeFromCart = (itemId) => {
        //This would need to be modified later on. Just understanding the tutorial first.
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart};

    console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
