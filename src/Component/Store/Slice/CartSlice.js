import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const ProductSlice = createSlice({
    name: 'MyCart',
    initialState,
    reducers: {
        addtoCart: (State, Action) => {
            console.log(State, Action);
        },
        removefromCart: (State, Action) => {
            console.log(State, Action);
        }
    },
})

// Action creators are generated for each case reducer function
export const { addtoCart, removefromCart } = ProductSlice.actions

export default ProductSlice.reducer