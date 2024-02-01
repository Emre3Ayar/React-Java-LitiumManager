import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import  GetBatteriesRequest from '../services/BatteryServices';

export const getBatteries = createAsyncThunk('batteries/getBatteries', async (dispatch, getState) => {
    const res = await GetBatteriesRequest();
    console.log(res);
    return res;
});

interface BatteriesState {
    status: string | null;
    batteries: any;
}

const initialState: BatteriesState = { batteries: [], status: null };

const  batteriesSlice = createSlice({
  name: 'batteries',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBatteries.pending, (state) => {
        state.status = "loading";
      })
      builder.addCase(getBatteries.fulfilled, (state, action) => {
        state.status = "success";
        state.batteries = action.payload;
      })
      builder.addCase(getBatteries.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export default batteriesSlice.reducer;
