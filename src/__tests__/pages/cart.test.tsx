import { AnyAction, configureStore } from '@reduxjs/toolkit'

import CartPage from '@/pages/cart'
import { Provider } from 'react-redux'
import cartSlice from '@/redux/slices/cart'
import renderer from 'react-test-renderer'
import userSlice from '@/redux/slices/user'

jest.mock('next/router', () => require('next-router-mock'))

describe('Cart page', () => {
  const mockStore = configureStore({
    reducer: {
      user: userSlice,
      cart: cartSlice,
    },
  })
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={mockStore}>
          <CartPage />
        </Provider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
