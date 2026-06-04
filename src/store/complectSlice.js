import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  complect: []
}


export const getComplectAsync = createAsyncThunk(
  'complect/getComplectAsync',
  async () => {

    const responce = await fetch('/api/v1/complect', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })


    if (!responce.ok) {
      throw new Error(`ERROR GET COMPLECT ${responce.status}`)
    }


    const data = responce.json()
    return data
  }
)


const complectSlice = createSlice({
  name: 'complect',
  initialState,


  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getComplectAsync.fulfilled, (state, action) => {
      state.complect = action.payload
    })
  }
})


export default complectSlice.reducer