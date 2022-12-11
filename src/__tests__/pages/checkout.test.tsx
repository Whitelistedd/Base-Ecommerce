import { AnyAction, configureStore } from '@reduxjs/toolkit'

import CheckoutPage from '@/pages/checkout'
import { Provider } from 'react-redux'
import { UserProvider } from '@auth0/nextjs-auth0'
import cartSlice from '@/redux/slices/cart'
import renderer from 'react-test-renderer'
import userSlice from '@/redux/slices/user'
import { wrapWithClient } from '@/__mocks__/utils'

jest.mock('next/router', () => require('next-router-mock'))

describe('Checkout  page', () => {
  const mockStore = configureStore({
    reducer: {
      user: userSlice,
      cart: cartSlice,
    },
  })
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        wrapWithClient(
          <Provider store={mockStore}>
            <UserProvider>
              <CheckoutPage />
            </UserProvider>
          </Provider>
        )
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
