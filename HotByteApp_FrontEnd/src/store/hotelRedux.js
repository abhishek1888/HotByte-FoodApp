import { createSlice } from "@reduxjs/toolkit";

const hotelSlice = createSlice({
  name: "hotel",
  initialState: {
    currentHotel: {},
  },
  reducers: {
    hotelList: (state, action) => {
      state.currentHotel=action.payload;
    },
    logout: (state)=>{
        state.currentHotel=null;
    }
  },
});

export const {hotelList,logout} =
  hotelSlice.actions;
export default hotelSlice.reducer;