import { configureStore } from '@reduxjs/toolkit'
import  {fetchPrducts} from "./Slice/ProductSlice.js"
import CartReducer from './Slice/CartSlice.js'
import  productsSlice  from './Slice/ProductSlice.js'

export const store = configureStore({
  reducer: {
    MyCart: CartReducer,
    MyProducts : productsSlice
  }, 
})

store.dispatch(fetchPrducts())