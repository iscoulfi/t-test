import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Status, VehiclesState } from './types';
import { getVehicles } from './asyncActions';
import { CardData } from '../../../types/appInterface';

const initialState: VehiclesState = {
  cards: [],
  status: Status.IDLE,
};

export const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    removeCard: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.filter((item) => item.id !== action.payload);
    },
    editCard: (state, action: PayloadAction<CardData>) => {
      state.cards = [
        ...state.cards.filter((item) => item.id !== action.payload.id),
        action.payload,
      ];
    },
  },

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

export const { removeCard, editCard } = vehiclesSlice.actions;
export default vehiclesSlice.reducer;
