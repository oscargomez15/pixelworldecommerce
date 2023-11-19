import React, { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {

    let [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('savedCart')) || []);
    const [receipt, setReceipt] = useState([]);

    const [lastGameAdded, setLastGame] = useState('');
    const [isAlertVisible, setAlert] = useState(false);

    useEffect(()=>{
        localStorage.setItem('savedCart',JSON.stringify(cartItems));
    }, [cartItems]);

    const getProductQuantity = (itemId) => {
        const quantity = cartItems.find(item => item.id === itemId)?.quantity

        if (quantity === undefined){
            return 0;
        }
            return quantity;
    }

    const getCartSubtotal = (cart) => {

        let subtotal = 0;

        cart?.map(product => {
            subtotal = subtotal + (product.gamePrice * product.quantity);
        })

        return subtotal.toLocaleString("en-US", {maximumFractionDigits: 2, minimumFractionDigits:2});
    }

    const getCartTax = (cart) => {
        let cartTax = 0;
        let convertedSubtotal = getCartSubtotal(cart).replace(/,/g, "");

        cartTax = (convertedSubtotal * Number(0.065)).toLocaleString("en-US", {maximumFractionDigits: 2, minimumFractionDigits: 2});            
        
        return cartTax;
    }

    const getTotal = (cart) => {
        let cartTotal = 0;
        cartTotal = (parseFloat(getCartSubtotal(cart).replace(/,/g, ""))) + parseFloat(getCartTax(cart));
        cartTotal = cartTotal.toLocaleString("en-US",{maximumFractionDigits: 2, minimumFractionDigits:2});
        return cartTotal;
    }

    const getLastGameAdded = () =>{
        return lastGameAdded;
    }

    const addToCart = (itemId, gameName, image, price, platform) => {
        const quantity = getProductQuantity(itemId);

        setLastGame(gameName);
        setAlert(true);

        setTimeout(() => {
            setAlert(false);
        }, 4000);

        if (quantity === 0){
            setCartItems(
                [
                    ...cartItems,
                    {
                        id:itemId,
                        name: gameName,
                        gameImage: image,
                        quantity: 1,
                        gamePrice: price,
                        platform: platform,
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

    const deleteFromCart = (itemId) => {
        setCartItems(
            cartProduct => 
            cartProduct.filter (currentProduct => {
                return currentProduct.id != itemId; 
            } )
        );
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
        const itemQuantity = getProductQuantity(itemId);
        if (itemQuantity === 1){
            deleteFromCart(itemId);
        }else{
            setCartItems(
                cartItems.map(
                    (item) => 
                    item.id === itemId 
                    ? {...item, quantity: item.quantity - 1 }
                    : item))
        }

    }

    const clearCart = () =>{
        setReceipt(cartItems);
        setCartItems([]);
    }

    const contextValue = {cartItems, lastGameAdded, isAlertVisible, getCartSubtotal, getCartTax, getTotal, getProductQuantity, addToCart, addOneToQuantity, deleteFromCart, removeOneToQuantity, clearCart, receipt};

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
