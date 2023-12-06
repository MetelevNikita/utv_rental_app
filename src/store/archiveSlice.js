import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// firestore

import db from './../fireabaseApp'
import { collection, addDoc} from "firebase/firestore";


export const setFireStore = createAsyncThunk(

  'archive/setFireStore',
  async (archive) => {

    const docRef = await addDoc(collection(db, 'archive'), archive)

    const newArchiveCard = {id: docRef.id, archive}
    return newArchiveCard
  }
)



 const archiveSlice = createSlice({
  name: 'archive',
  initialState: {
    archive: []
  },


  extraReducers: (builder) => {
    builder.addCase(setFireStore, (state, action) => {
      state.archive = action.payload
    })
  }
})


export default archiveSlice.reducer