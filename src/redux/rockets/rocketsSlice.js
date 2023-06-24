import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ROCKETS_URL = 'https://api.spacexdata.com/v4/rockets';
export const getRockets = createAsyncThunk('rockets/getRockets', async (arg, { rejectWithValue }) => {
  try {
    const data = await axios.get(ROCKETS_URL);
    return data.data.map((x) => ({
      id: x.id,
      name: x.name,
      type: x.type,
      flickr_images: x.flickr_images,
      description: x.description,
    }));
  } catch (error) {
    return rejectWithValue(error);
  }
});

const initialState = {
  data: [],
  isLoading: false,
  error: undefined,
};
export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      state.data = state.data.map((rocket) => (rocket.id === action.payload ? ({
        ...rocket, reserved: true,
      }) : ({ ...rocket })));
    },
    cancelRocket: (state, action) => {
      state.data = state.data.map((rocket) => (rocket.id === action.payload ? ({
        ...rocket, reserved: false,
      }) : ({ ...rocket })));
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reserveRocket, cancelRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
