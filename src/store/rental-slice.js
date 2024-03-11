import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// firestore

import db from './../fireabaseApp'
import { collection, getDocs} from "firebase/firestore";




export const getFireStore = createAsyncThunk(
  'rental/getFireStore',

  async () => {

    try {

      const querySnapshot = await getDocs(collection(db, 'rental'))
      const rentalDB = querySnapshot.docs.map((doc) => ({

        id: doc.id,
        rentalCard: doc.data()
      }))
      
        return rentalDB

    } catch (error) {
      console.error(error)
    }


  }
)






const rentalSlice = createSlice({
  name: 'rental',
  initialState: {
    rental: []
  },

  extraReducers: (builder) => {
    builder
    .addCase(getFireStore.fulfilled, (state, action) => {
      state.rental = action.payload
    })

  }
})


export default rentalSlice.reducer