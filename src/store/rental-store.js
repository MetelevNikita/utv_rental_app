import { configureStore } from "@reduxjs/toolkit";
import addTrashReducer from './trash-slice'
import rentalSlice from "./rental-slice";


export const rentalStore = configureStore({
  reducer: {
    addTrash: addTrashReducer,
    addRental: rentalSlice
  }
})