

import React, { createContext, useState } from 'react'
import { getCart } from '../utils/cartUtils';

// seda impordin, et kätte saada muutujaid
export const CartSumContext = createContext();

// määran scope-i, kus muutujad on kasutusel
export const CartSumContextProvider = ({children}) => {
  const [cartSum, setCartSum] = useState(determineCartSum());

  function determineCartSum() {
    let sum = 0;
    getCart().forEach((product) => {
        sum += product.cartProduct.price * product.quantity;
    })
    return sum;
  }

  function decreaseSum(sum) {
    setCartSum(cartSum - sum);
  }

  function increaseSum(sum) {
    setCartSum(cartSum + sum);
  }

  function empty() {
    setCartSum(0);
  }

  return (
    <CartSumContext.Provider value={{cartSum, empty, decreaseSum, increaseSum}}>
      {children}
    </CartSumContext.Provider>
  )
}
