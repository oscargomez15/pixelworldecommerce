import React, { createContext, useState } from 'react'

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);


    const getProductQuantity = (itemId) => {
        const quantity = cartItems.find(item => item.id === itemId)?.quantity

        if (quantity === undefined){
            return 0;
        }
            return quantity;
    }

    const addToCart = (itemId, gameName, image) => {
        const quantity = getProductQuantity(itemId);
        
        if (quantity === 0){
            setCartItems(
                [
                    ...cartItems,
                    {
                        id:itemId,
                        name: gameName,
                        gameImage: image,
                        quantity: 1
                    }
                ]
            )
        }else{
            setCartItems(
                cartItems.map(
                    (item) => 
                    item.id === itemId 
                    ? {...item, quantity: item.quantity + 1 }
                    : item))
        }

    }

    const removeFromCart = (itemId) => {
        //This would need to be modified later on. Just understanding the tutorial first.
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const addOneToQuantity = (itemId) => {
        setCartItems(
            cartItems.map(
                (item) => 
                item.id === itemId 
                ? {...item, quantity: item.quantity + 1 }
                : item))
    }

    const removeOneToQuantity = (itemId) => {
        setCartItems(
            cartItems.map(
                (item) => 
                item.id === itemId 
                ? {...item, quantity: item.quantity - 1 }
                : item))
    }

    const contextValue = {cartItems, getProductQuantity, addToCart, addOneToQuantity, removeFromCart, removeOneToQuantity};

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
