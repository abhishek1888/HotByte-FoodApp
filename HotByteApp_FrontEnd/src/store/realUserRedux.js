import { createSlice } from "@reduxjs/toolkit";

const realUserSlice = createSlice({
  name: "realUser",
  initialState: {
    currentRealUser: {},
  },
  reducers: {
    addUser: (state, action) => {
      state.currentRealUser=action.payload;
    },
    logout: (state)=>{
        state.currentRealUser=null;
    }
  },
});

export const {addUser,logout} =
realUserSlice.actions;
export default realUserSlice.reducer;