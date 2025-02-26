import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'

export const fetchPrducts = createAsyncThunk("",async()=>{
    const response = await fetch('https://full-stack-ecommerce-mern.onrender.com/products')
    return await response.json()
})

const initialState = {
  products: [],
  status : null,  //loading , succeeded , failed
  error : null
}

export const productsSlice = createSlice({
  name: 'MyProducts',
  initialState,
  reducers: {
  },
extraReducers : (builder)=>{
builder.addCase(fetchPrducts.pending , (state)=>{
   state.status = "loading.."
})
.addCase(fetchPrducts.fulfilled , (state , action)=>{
  state.status = "succeeded"
  state.products = action.payload
})
.addCase(fetchPrducts.rejected , (state , action)=>{
   state.error = action.error.message
   state.status = "failed"
})
}
})

// Action creators are generated for each case reducer function


export default productsSlice.reducer