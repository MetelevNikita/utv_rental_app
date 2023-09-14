import { createSlice } from "@reduxjs/toolkit";


export const trashSlice = createSlice({
  name: 'trash',
  initialState: {
    trash: []
  },


  reducers: {

    addTrash: (state, action) => {
      state.push(action)
    },

  }

})

export const {addTrash} = trashSlice.actions

export default trashSlice.reducer