import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import suspectService from './suspectService'

const initialState = {
  suspects: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new suspect
export const createSuspect = createAsyncThunk(
  'suspects/create',
  async (suspectData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await suspectService.createSuspect(suspectData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user suspects
export const getSuspect = createAsyncThunk(
  'suspects/getAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await suspectService.getSuspect(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const suspectSlice = createSlice({
  name: 'suspects',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSuspect.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createSuspect.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.suspects.push(action.payload)
      })
      .addCase(createSuspect.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getSuspect.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSuspect.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.suspects = action.payload
      })
      .addCase(getSuspect.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = suspectSlice.actions
export default suspectSlice.reducer
