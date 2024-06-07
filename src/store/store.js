import { configureStore } from "@reduxjs/toolkit";


// slice

import productSlice from "./productSlice";
import teamSlice from "./teamSlice";
import trashSlice from "./trashSlice";

export const store= configureStore({
  reducer: {

    product: productSlice,
    team: teamSlice,
    trash: trashSlice

  }
})