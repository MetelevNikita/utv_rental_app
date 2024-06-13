import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//

const initialState = {
  trash: []
}


const trashUrl = 'http://90.156.224.112/api/v1/trash'

//


export const getTrashAsync  =  createAsyncThunk(
  'getTrashAsync',
  async () => {
    const responce = await fetch(trashSlice, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const data = await responce.json()
    return data
  }
)



export const postTrashAsync  =  createAsyncThunk(
  'postTrashAsync',
  async  (payload)  =>  {
    const responce  = await fetch(trashUrl,  {
      method:  'POST',
      headers:  {
        'Content-Type':  'application/json',
      },
      body:  JSON.stringify(payload),
    })

    const data  = await responce.json()
    console.log(data)
    return data


  }
)



const trashSlice = createSlice({
  'name':  'trash',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getTrashAsync.fulfilled,   (state, action)  =>  {
      state.trash = action.payload
    })


  }

})



export default trashSlice.reducer;