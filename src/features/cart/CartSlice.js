import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartitems";


// 買い物かごの初期化

const initialState = {
    cartitems:cartItems,
    amount: 4,
    total: 0,
};

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        clearCart:(state) =>{
            // state.cartitems = [];
            return{cartitems:[],amount:0,total:0}
        },
        removeItem:(state,action) => {
            // console.log(action)
            const itemId = action.payload;
            state.cartitems = state.cartitems.filter((item) => item.id !== itemId);
        },
        increase:(state,action) => {
            const cartItem = state.cartitems.find((item) => item.id === action.payload);
            cartItem.amount =cartItem.amount +1;

        },
        decrease:(state,action) => {
            const cartItem = state.cartitems.find((item) => item.id === action.payload);
            cartItem.amount =cartItem.amount - 1;

        },
        calculateTotals:(state) => {
            let amount = 0;
            let total = 0;
            state.cartitems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            })
            state.amount = amount;
            state.total = total;
        },
    },
});
console.log(cartSlice)

export const {clearCart,removeItem,increase,decrease,calculateTotals} = cartSlice.actions;
export default cartSlice.reducer