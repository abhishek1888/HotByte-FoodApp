import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    Hotel: 0,
  },
  reducers: {
    hotel: (state, action) => {
      state.Hotel=action.payload;
    },
    logout: (state)=>{
        state.Hotel=0;
    }
  },
});

export const {hotel,logout} =
  cartSlice.actions;
export default cartSlice.reducer;