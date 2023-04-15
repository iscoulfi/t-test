import { createSlice } from '@reduxjs/toolkit';

import { Status, VehiclesState } from './types';
import { getVehicles } from './asyncActions';

const initialState: VehiclesState = {
  cards: [],
  status: Status.IDLE,
};

export const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getVehicles.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(getVehicles.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      if (action.payload) state.cards = action.payload;
    });
    builder.addCase(getVehicles.rejected, (state) => {
      state.status = Status.ERROR;
      state.cards = [];
    });
  },
});

export default vehiclesSlice.reducer;
