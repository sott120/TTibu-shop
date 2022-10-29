import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice"

let myCart = createSlice({
    name: "cart",
    initialState: [
        { id: 0, name: "White and Black", count: 2 },
        { id: 2, name: "Grey Yordan", count: 1 },
    ],
    reducers: {
        cartIncrease(state, action) {
            const findObj = state.findIndex((a) => { return a.id === action.payload });
            state[findObj].count ++;
        },
        cartDecrease(state, action) {
            const findObj = state.findIndex((a) => { return a.id === action.payload });
            if (state[findObj].count > 1) {
                state[findObj].count--;
            } else {
                return;
            }
        },
        addCart(state, action) {
            state.push(action.payload);
        }
    },
});

export let { cartIncrease, cartDecrease, addCart } = myCart.actions;

export default configureStore({
    reducer: {
        myCart: myCart.reducer,
        user : user.reducer
    },
});
