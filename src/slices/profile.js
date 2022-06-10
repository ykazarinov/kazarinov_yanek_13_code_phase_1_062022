import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import userService from "../services/user.service";
import authHeader from "../services/auth-header";
import axios from "axios";





export const getProfil = createAsyncThunk(
  'profile/getProfil',
  async (thunkAPI) => {
    const res = await userService.getUserBoard()
  return res.data
})




// export const getProfil = createAsyncThunk(
//   'profile/getProfil',
//   async (thunkAPI) => {
//     // try {
//       const data = axios({
//         method: 'post',
//         url: "http://localhost:3001/api/v1/user/profile",
//         headers: authHeader()
//       })
//       console.log(data.data)
//       return data.data
//     }
//     catch (error){
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       thunkAPI.dispatch(setMessage(message));
//       console.log(error)
//       return thunkAPI.rejectWithValue();
//     }
// })

const initialState = {
  entities: [],
  loading: false,
}

  const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: {

    [getProfil.pending]: (state) => {
      state.loading = true
    },
    [getProfil.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.entities = payload
    },
    [getProfil.rejected]: (state) => {
      state.loading = false
    },
   
  },
});
const { reducer } = profileSlice;
export default reducer;

//=============================
