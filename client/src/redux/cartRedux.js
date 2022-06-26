import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            const inCart = state.products.find(item => item._id === action.payload._id ? true : false)
            if (inCart) {
                state.products.forEach((item, index) => {
                    if (item.id === action.payload._id) {
                        state.products[index].quantity = action.payload.quantity + item.quantity
                        state.total += action.payload.price * action.payload.quantity;
                    }
                })

            } else {
                state.quantity += 1;
                state.products.push(action.payload);
                state.total += action.payload.price * action.payload.quantity;
            }
        },
        removeProduct: (state, action) => {
            const newcart = state.products.filter(product => product._id !== action.payload._id);
            if (state.quantity !== 1) {
                state.products = newcart;
                state.quantity -= 1;
                state.total -= action.payload.price * action.payload.quantity;
            } else if (state.quantity === 1) {
                state.products = newcart;
                state.quantity -= 1;
                state.total = 0;
            }
        },
        addQuantity: (state, action) => {
            console.log(action.payload)
            state.products[action.payload].quantity += 1
            state.total += state.products[action.payload].price
        },
        removeQuantity: (state, action) => {
            console.log(action.payload)
            state.products[action.payload].quantity -= 1
            state.total -= state.products[action.payload].price
        },
        clearCart: (state) => {
            state.products = []
            state.quantity = 0
            state.total = 0
        },
        UpdateProduct: (state, action) => {
            let newproduct = action.payload.newproduct;
            newproduct = { title: newproduct.title, img: newproduct.img, price: newproduct.price };
            state.products[action.payload.index] = { ...action.payload.oldproduct, ...newproduct };
        }
    },
})

export const { UpdateProduct, addProduct, removeQuantity, addQuantity, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;