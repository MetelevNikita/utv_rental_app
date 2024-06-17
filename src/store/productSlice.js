import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//

const initialState = {
  product: []
}

const urlProduct = 'https://utvls.tw1.su/api/v1/product'

//


export const getProductAsync = createAsyncThunk(
  'getProductAsync',

  async () => {
    const responce = await fetch(urlProduct, {
      method: 'GET',
      headers: {
        'Content-Type':  'application/json',
        'Accept':  'application/json'
      }
    })


    const data = await responce.json()
    return data
  }
)


const productSlice = createSlice({

  'name': 'product',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getProductAsync.fulfilled, (state, action)  =>  {
      state.product = action.payload
    })
  }

})

export default productSlice.reducer