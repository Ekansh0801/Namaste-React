import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action) => {
            //mutate the state directly and no need to return 
            //redux uses immer library for it the old vanil redux creates new state then update and return but no need in new redux toolkit
            state.items.push(action.payload);
        },
        removeItem: (state,action) => {
            state.items.pop();
        },
        clearCart: (state) =>{
            state.items.length = 0;
        }
    }

})

export const {addItem,removeItem,clearCart} = cartSlice.actions 
export default cartSlice.reducer