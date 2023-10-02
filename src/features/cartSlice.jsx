import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}
    
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        changeQuantity: (state, action) => {
            const product = action.payload;
            const index = state.cart.findIndex((item)=>item.id===product.id);
            if (index === -1) {
                state.cart.push(product);
               
            } else {
                state.cart[index] = {
                    ...state.cart[index],
                    quantity: state.cart[index].quantity + product.quantity,
                };
                if (state.cart[index].quantity <= 0) {
                    state.cart.splice(index, 1);
                 
                }
            }
            
        }, 
        removeItemFromCart: (state, action) => {
            const index = state.findIndex(
                (product) => product.title === action.payload.title
            );
            if (index !== -1) {
                if (state[index].quantity === 1) {
                    state.splice(index, 1);
                } else {
                    state[index].quantity--;
                }
            }
            
        }  
    },
   extraReducers: (builder) => {},
})

export const { changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
