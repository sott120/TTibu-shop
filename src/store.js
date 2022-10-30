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
            const findId = state.findIndex((a) => { return a.id === action.payload });
            state[findId].count ++;
        },
        cartDecrease(state, action) {
            const findId = state.findIndex((a) => { return a.id === action.payload });
            if (state[findId].count > 1) {
                state[findId].count--;
            } else {
                return;
            }
        },
        addItem(state, action) {
            const findId = state.findIndex((a) => { return a.id === action.payload.id });
            if (findId !== -1) {
                state[findId].count++;
            } else {
                state.push(action.payload);
                console.log(state);
            }
            
        },
        deleteItem(state, action){
            const findId = state.findIndex((a) => { return a.id === action.payload });
            state.splice(findId,1);
        }
    },
});

export let { cartIncrease, cartDecrease, addItem, deleteItem } = myCart.actions;

export default configureStore({
    reducer: {
        myCart: myCart.reducer,
        user : user.reducer
    },
});
