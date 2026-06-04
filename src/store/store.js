import { configureStore } from "@reduxjs/toolkit";


// slice

import productSlice from "./productSlice";
import teamSlice from "./teamSlice";
import trashActiveSlice from "./trashActiveSlice";
import portfolioSlice from "./portfolioSlice";
import complectSlice from "./complectSlice";

export const store= configureStore({
  reducer: {

    product: productSlice,
    team: teamSlice,
    trashActive: trashActiveSlice,
    portfolio: portfolioSlice,
    complect: complectSlice

  }
})