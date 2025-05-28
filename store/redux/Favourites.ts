import { createSlice } from "@reduxjs/toolkit";
interface FavouritesState {
  ids: string[];
}

const initialState: FavouritesState = {
  ids: [],
};

const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFav: (state, action:any) => {
        state.ids.push(action.payload.id)
     },
    removeFav: (state, action:any) => {
        state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    },
  },
});


export const addFav = favouriteSlice.actions.addFav
export const removeFav = favouriteSlice.actions.removeFav

export default favouriteSlice.reducer