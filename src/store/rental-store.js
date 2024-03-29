import { configureStore } from "@reduxjs/toolkit";
import addTrashReducer from './trash-slice'
import rentalSlice from "./rental-slice";
import archiveSlice from "./archiveSlice";


export const rentalStore = configureStore({
  reducer: {
    addTrash: addTrashReducer,
    addRental: rentalSlice,
    addArchive: archiveSlice
  }
})