import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  portfolio: []
}

const portfolioUrl = '/api/v1/portfolio'


export const getPortfolioAsync  =  createAsyncThunk(
  'getPortfolioAsync',
  async () => {
    const responce = await fetch(portfolioUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const data = await responce.json()
    return data
  }
)




const portfolioSlice = createSlice({
  'name': 'portfolio',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getPortfolioAsync.fulfilled, (state, action)  =>  {
      state.portfolio  =  action.payload
   })
  }
})


export default portfolioSlice.reducer