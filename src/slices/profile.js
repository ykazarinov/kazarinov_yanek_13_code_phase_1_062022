import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import userService from "../services/user.service";

// createAsyncThunk for middleware for get data of User's Profil 
export const getProfil = createAsyncThunk(
  'profile/getProfil',
  async (thunkAPI) => {
    try {
      const res = await userService.getUserBoard()
      return res.data
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      console.log(error)
      return thunkAPI.rejectWithValue();
    }
  }
)

const initialState = {
  entities: null,
  loading: false,
}

// slice, which content reducers and actions for data of the User's Profil and status of loading 
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: {

    [getProfil.pending]: (state) => {
      state.loading = true
    },
    [getProfil.fulfilled]: (state, action) => {
      state.loading = false
      state.entities = action.payload
    },
    [getProfil.rejected]: (state) => {
      state.loading = false
    },
  },
});
const { reducer } = profileSlice;
export default reducer;
