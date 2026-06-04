import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";



const initialState  =  {
  trashActive: []
}



const trashActiveSlice = createSlice({
  'name': 'trashActive',
  initialState,

  reducers: {


    addToTrash: (state, action) => {
       state.trashActive.push(action.payload)
    },

    deleteToTrash:  (state, action)  =>  {
      state.trashActive = state.trashActive.filter((item) =>  item.title !== action.payload)
    }


  }
})


export const  {  addToTrash,  deleteToTrash, getActiveTrash  }  =  trashActiveSlice.actions
export default trashActiveSlice.reducer