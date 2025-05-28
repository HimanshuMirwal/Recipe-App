import { configureStore } from '@reduxjs/toolkit';
import favouriteSlice from "./Favourites";

export const store = configureStore({
    reducer:{
        favouriteMeal : favouriteSlice
    },

})