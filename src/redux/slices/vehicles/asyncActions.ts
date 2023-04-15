import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CardData } from '../../../types/appInterface';

export const getVehicles = createAsyncThunk('comment/getVehicles', async () => {
  try {
    const { data } = await axios.get<CardData[]>('https://test.tspb.su/test-task/vehicles');
    return data;
  } catch (error) {
    console.log(error);
  }
});
