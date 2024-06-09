import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";



const initialState  =  {
  activeTrash: []
}



const trashActiveSlice = createSlice({
  'name': 'trashActive',
  initialState,

  reducers: {


    addToTrash: (state, action) => {
       state.activeTrash.push(action.payload)
    },

    deleteToTrash:  (state, action)  =>  {
      state.activeTrash = state.activeTrash.filter((item) =>  item.title !== action.payload)
    }


  }
})


export const  {  addToTrash,  deleteToTrash, getActiveTrash  }  =  trashActiveSlice.actions
export default trashActiveSlice.reducer