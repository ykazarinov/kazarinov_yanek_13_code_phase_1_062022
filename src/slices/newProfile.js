import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import editService from "../services/edit.service";

export const setProfil = createAsyncThunk(
  'newProfile/setProfil',
  async ({ firstName, lastName }, thunkAPI) => {
    try {
    const data = await editService.putProfile(firstName, lastName)
  return { user: data.data }
} catch (error) {
  const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
}
})

const initialState = {
  entities: null,
  loading: false,
}

  const newProfileSlice = createSlice({
  name: "newProfile",
  initialState,
  reducers: {},
  extraReducers: {
    
    [setProfil.fulfilled]: (state, action) => {
        state.loading = false
        state.entities = action.payload.entities
    },
    [setProfil.rejected]: (state) => {
        state.loading = false
    },
    [setProfil.pending]: (state) => {
      state.loading = true
    },


   
  },
});
const { reducer } = newProfileSlice;
export default reducer;

//=============================
