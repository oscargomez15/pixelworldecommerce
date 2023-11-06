import React, { createContext, useState } from 'react'

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);
    const [lastGameAdded, setLastGame] = useState('');
    const [isAlertVisible, setAlert] = useState(false);

    const getProductQuantity = (itemId) => {
        const quantity = cartItems.find(item => item.id === itemId)?.quantity

        if (quantity === undefined){
            return 0;
        }
            return quantity;
    }

    const getCartSubtotal = () => {

        let subtotal = 0;

        cartItems.map(product => {
            subtotal = subtotal + (product.gamePrice * product.quantity);
        })

        return subtotal;
    }

    const getCartTax = () => {
        let cartTax = 0;
        cartTax = (getCartSubtotal() * Number(0.065)).toLocaleString("en-US", {maximumFractionDigits: 2, minimumFractionDigits: 2});
        return cartTax;
    }

    const getTotal = () => {
        let cartTotal = 0;
        cartTotal = parseFloat(getCartSubtotal()) + parseFloat(getCartTax());
        return cartTotal;
    }

    const getLastGameAdded = () =>{
        return lastGameAdded;
    }

    const addToCart = (itemId, gameName, image, price) => {
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
                        gamePrice:price 
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

    const contextValue = {cartItems, lastGameAdded, isAlertVisible, getCartSubtotal, getCartTax, getTotal, getProductQuantity, addToCart, addOneToQuantity, deleteFromCart, removeOneToQuantity};

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}
