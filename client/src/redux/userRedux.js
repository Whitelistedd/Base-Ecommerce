import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        Success: false,
        confirmationURL: null
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, actions) => {
            state.isFetching = false;
            state.error = false;
            state.Success = true;
            state.currentUser = actions.payload
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.Success = false;
            state.error = true
        },
        confirmOrder: (state, actions) => {
            const token = actions.payload
            state.confirmationURL = token.confirmationToken
        }
    },
})

export const { loginStart, loginSuccess, loginFailure, confirmOrder, createIdempotent } = userSlice.actions;
export default userSlice.reducer;