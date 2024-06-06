import { createSlice } from '@reduxjs/toolkit'
import { IProductWithQuantity } from '../../types/Product'

export interface CartState {
  cart: IProductWithQuantity[]
}

const initialState: CartState = {
  cart: [] as IProductWithQuantity[],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      
        const index = state.cart?.findIndex(item => item?._id === action.payload?._id)

        if(index === -1){
            state.cart.push({...action.payload,quantity:1})
        }else{
            state.cart[index].quantity += 1
            
        }
    },
    removeFromCart: (state,action) => {
        const curItem = action.payload
        const index = state.cart?.findIndex(item => item?._id === curItem?._id)

        if(index === -1)  return 
        if(state.cart[index].quantity === 1){
            state.cart = state.cart.filter(item => item?._id !== curItem?._id)
        }
        else{
            state.cart[index].quantity -= 1
        }
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer