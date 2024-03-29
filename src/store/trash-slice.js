import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  trash: []
}


export const trashSlice = createSlice({
  name: 'trash',
  initialState,

  reducers: {

    addTrash: (state, action) => {
      state.trash.push(action.payload)
    },

    deleteTrash: (state, action) => {
      state.trash = state.trash.filter((item) => {return item.title !== action.payload})
    },

    clearTrash: (state, action) => {
      state.trash = action.payload
    }

  }

})

export const { addTrash, deleteTrash, clearTrash } = trashSlice.actions

export default trashSlice.reducer