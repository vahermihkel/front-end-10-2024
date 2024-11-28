import { createSlice } from '@reduxjs/toolkit'
import { getCart } from '../utils/cartUtils';

function determineCartCount () {
  let sum = 0;
  getCart().forEach((product) => {
      sum += product.quantity;
  })
  return sum;
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: determineCartCount() // algväärtus
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload
    },
    empty: state => {
      state.value = 0
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, decrementByAmount, empty } = counterSlice.actions

export default counterSlice.reducer