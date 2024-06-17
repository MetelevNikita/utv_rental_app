import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//

const initialState = {
  team: []
}

const teamUrl = 'https://utvls.tw1.su/api/v1/person'

//

export const getTeamAsync  =  createAsyncThunk(
  'getTeamAsync',

  async () => {

    const responce = await fetch(teamUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const data = await responce.json()
    return data

  }
)


const teamSlice = createSlice({
  'name': 'team',
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getTeamAsync.fulfilled, (state, action)  => {
      state.team  =  action.payload
   })

  }
})

export  default  teamSlice.reducer