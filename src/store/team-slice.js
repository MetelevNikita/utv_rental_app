import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//

import db from "../fireabaseApp";
import { collection, getDocs } from "firebase/firestore";



export const getFireStoreTeam = createAsyncThunk(
  'team/getFireStoreTeam',

  async () => {
    const querySnapshot = await getDocs(collection(db, 'team'))
    const teamDB = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      team: doc.data()
    }))


    return teamDB

  }

)






export const teamSlice = createSlice({
  name: 'team',
  initialState: {
    team: []
  },



  extraReducers: (builder) => {

    builder.addCase(getFireStoreTeam.fulfilled, (state, action) => {
      state.team = action.payload
    })

  }

})


export default teamSlice.reducer