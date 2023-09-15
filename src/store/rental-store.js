import { configureStore } from "@reduxjs/toolkit";
import addTrashReducer from './trash-slice'

export const rentalStore = configureStore({
  reducer: {
    addTrash: addTrashReducer
  }
})