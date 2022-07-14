import { configureStore, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import { Action } from 'redux'
import userSlice from '../slices/user'
import cartSlice from '../slices/cart'

const store = () =>
  configureStore({
    reducer: {
      user: userSlice,
      cart: cartSlice,
    },
  })

export type AppStore = ReturnType<typeof store>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>

export const wrapper = createWrapper<AppStore>(store)
