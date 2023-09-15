import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  trash: []
}


export const trashSlice = createSlice({
  name: 'trash',
  initialState,

  reducers: {

    addTrash: (state, action) => {
      // state.trash.push(action.payload)
      state.trash.push(action.payload)


    },

  }

})

export const {addTrash} = trashSlice.actions

export default trashSlice.reducer