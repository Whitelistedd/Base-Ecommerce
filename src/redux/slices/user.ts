import { createSlice } from '@reduxjs/toolkit'
import { UserInitialState } from './slice.model'

const initialState: UserInitialState = {
  currentUser: null,
  isFetching: false,
  error: false,
  Success: false,
  confirmationURL: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true
    },
    loginSuccess: (state, actions) => {
      state.isFetching = false
      state.error = false
      state.Success = true
      state.currentUser = actions.payload
    },
    loginFailure: (state) => {
      state.isFetching = false
      state.Success = false
      state.error = true
    },
    confirmOrder: (state, actions) => {
      const token = actions.payload
      state.confirmationURL = token.confirmationToken
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, confirmOrder } =
  userSlice.actions
export default userSlice.reducer
