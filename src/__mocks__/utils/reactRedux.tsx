import { Provider } from 'react-redux'
import cartSlice from '@/redux/slices/cart'
import { configureStore } from '@reduxjs/toolkit'
import userSlice from '@/redux/slices/user'

export const mockStore = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
})

export function wrapWithRedux(children: React.ReactNode) {
  return <Provider store={mockStore}>{children}</Provider>
}
