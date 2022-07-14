import { createSlice } from '@reduxjs/toolkit'
import { CartInitialState } from './slice.model'

const initialState: CartInitialState = {
  products: [],
  quantity: 0,
  total: 0,
  OrderError: '',
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const inCart = state.products.find((item) =>
        item._id === action.payload._id &&
        item.size === action.payload.size &&
        item.color === action.payload.color
          ? true
          : false
      )
      if (inCart) {
        state.products.forEach((item, index) => {
          if (
            item._id === action.payload._id &&
            item.size === action.payload.size &&
            item.color === action.payload.color
          ) {
            state.products[index].quantity =
              action.payload.quantity + item.quantity
            state.total += action.payload.price * action.payload.quantity
          }
        })
      } else {
        state.quantity += 1
        state.products.push(action.payload)
        state.total += action.payload.price * action.payload.quantity
      }
    },
    removeProduct: (state, action) => {
      const newcart = state.products.filter(
        (product, index) => index !== action.payload.index
      )
      if (state.quantity !== 1) {
        state.products = newcart
        state.quantity -= 1
        state.total -= action.payload.item.price * action.payload.item.quantity
      } else if (state.quantity === 1) {
        state.products = newcart
        state.quantity -= 1
        state.total = 0
      }
    },
    addQuantity: (state, action) => {
      state.products[action.payload].quantity += 1
      state.total += state.products[action.payload].price
    },
    removeQuantity: (state, action) => {
      state.products[action.payload].quantity -= 1
      state.total -= state.products[action.payload].price
    },
    clearCart: (state) => {
      state.products = []
      state.quantity = 0
      state.total = 0
    },
    UpdateProduct: (state, action) => {
      let newproduct = action.payload.newproduct
      newproduct = {
        title: newproduct.title,
        img: newproduct.img,
        price: newproduct.price,
      }
      state.products[action.payload.index] = {
        ...action.payload.oldproduct,
        ...newproduct,
      }
    },
    setError: (state, action) => {
      state.OrderError = action.payload
    },
  },
})

export const {
  UpdateProduct,
  addProduct,
  removeQuantity,
  addQuantity,
  setError,
  removeProduct,
  clearCart,
} = cartSlice.actions
export default cartSlice.reducer
