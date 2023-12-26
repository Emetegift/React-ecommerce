// In here, state and everything related to logic will be defined here
import  {createContext, useState} from 'react'
import {PRODUCTS} from '../products'

 export const ShopContext = createContext(null);
 // Function to represent the initial state of  a click items
 const getDefaulCart = ()=>{
    let cart = {};
    for(let i =1; i< PRODUCTS.length + 1;  i++){
        cart[i]= 0;
    }
    return cart;
 }

export const ShopContextProvider = (props) => {
const [cartItems, setCartItems] = useState(getDefaulCart());

//To get the total amounts of selected items
const getTotalCartAmount = ()=>{
  let totalAmount =0;
  for (const item in cartItems){
    if(cartItems[item]> 0){
      let itemInfo = PRODUCTS.find((product)=> product.id === Number(item));
      totalAmount += cartItems[item ]* itemInfo.price

    }
  }
  return totalAmount;
}

// Function that will help add item to cart and remove from cart
const addToCart = (itemId) =>{
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
}
const removeFromCart = (itemId) =>{
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));

};

// Function to manually remove or add item to cart
const updateCartItemCount = (newAmount, itemId) =>{
  setCartItems((prev) => ({...prev, [itemId]: newAmount}))
}


const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount }

  return (
    <ShopContext.Provider value ={contextValue}> {props.children}</ShopContext.Provider>
  )
}




