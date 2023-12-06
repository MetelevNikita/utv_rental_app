import { configureStore } from "@reduxjs/toolkit";
import addTrashReducer from './trash-slice'
import rentalSlice from "./rental-slice";
import teamSlice from "./team-slice";
import archiveSlice from "./archiveSlice";


export const rentalStore = configureStore({
  reducer: {
    addTrash: addTrashReducer,
    addRental: rentalSlice,
    addTeam: teamSlice,
    addArchive: archiveSlice
  }
})