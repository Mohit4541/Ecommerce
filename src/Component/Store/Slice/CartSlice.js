import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
}

export const ProductSlice = createSlice({
    name: 'MyCart',
    initialState,
    reducers: {
        addtoCart: (State, Action) => {
            console.log(JSON.parse(JSON.stringify(State.products)))

            let match = State.products.filter((item) => {
                console.log(Action.payload.productId)
                return item.productId == Action.payload.productId
            })
            if (match.length > 0) {
                State.products = State.products.map((item) => {
                    if (item.productId == Action.payload.productId) {
                        return {
                            ...item, quantity: item.quantity + 1
                        }     
                    }
                    return item
                })
            } else {
                State.products.push({ ...Action.payload, quantity: 1 })
            }
            
        },

        removefromCart: (State, Action) => {
            State.products= State.products.filter((item) => {
                return item.productId != Action.payload
              })
            console.log(State, Action);
        }
    },
})

// Action creators are generated for each case reducer function
export const { addtoCart, removefromCart } = ProductSlice.actions

export default ProductSlice.reducer