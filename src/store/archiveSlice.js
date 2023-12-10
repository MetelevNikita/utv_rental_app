import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// firestore

import db from './../fireabaseApp'
import { collection, addDoc} from "firebase/firestore";


export const setFireStore = createAsyncThunk(

  'archive/setFireStore',
  async (archive) => {

    const docRef = await addDoc(collection(db, 'archive'), archive)

    const newCard = {id: docRef.id, archive}

    console.log(newCard)

    return newCard
  }
)



 const archiveSlice = createSlice({
  name: 'archive',
  initialState: {
    archive: []
  },


  extraReducers: (builder) => {
    builder.addCase(setFireStore.fulfilled, (state, action) => {
      state.archive.push(action.payload)
    })
  }
})


export default archiveSlice.reducer