import { createSlice } from "@reduxjs/toolkit";
const favouriteSlice = createSlice({
  name: "favourites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFav: (state, action) => {
        state.ids.push(action.payload.id)
     },
    removeFav: (state, action) => {
        state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    },
  },
});


export const addFav = favouriteSlice.actions.addFav
export const removeFav = favouriteSlice.actions.removeFav

export default favouriteSlice.reducer