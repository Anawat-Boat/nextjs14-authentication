import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const userSlice = createSlice({
    name: 'user',
    initialState:{ },
    reducers:{}
})


export default userSlice.reducer;
export const userSelector = (state: RootState) => state.userReducer