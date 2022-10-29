import { configureStore, createSlice, current } from "@reduxjs/toolkit";
import user from "./store/userSlice"

let myCart = createSlice({
    name: "cart",
    initialState: [
        { id: 0, name: "White and Black", count: 2 },
        { id: 2, name: "Grey Yordan", count: 1 },
    ],
    reducers: {
        cartIncrease(state, action) {
            const findId = state[action.payload].id;
            const findObj = state.filter((arr) => arr.id === findId);
            findObj[0].count += 1;
        },
        cartDecrease(state, action) {
            const findId = state[action.payload].id;
            const findObj = state.filter((arr) => arr.id === findId);
            if (findObj[0].count > 1) {
                findObj[0].count += -1;
            } else {
                return;
            }
        },
        addCart(state, action) {
            state.push(action.payload);
            console.log(current(state[0]));
            console.log(current(state[1]));
            console.log(state[2]);
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
