import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getBinarById } from "../../../services/mobilApi";

export const getDetailCars = createAsyncThunk(
  "MobilApi/getBinarApi",
  async (binarId) => {
    const res = await getBinarById(binarId);
    return res.data;
  }
);

export const deleteCar = createAsyncThunk("/admin/car/", async (carId) => {
  const res = await deleteCar(carId);
  return res.data;
});

const initialState = {
  cars: {},
  carsStatus: "idle",
  deleteStatus: "idle",
};

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: {
    [getDetailCars.pending]: (state) => ({
      ...state,
      carsStatus: "loading",
    }),
    [getDetailCars.fulfilled]: (state, action) => ({
      ...state,
      cars: action.payload,
      carsStatus: "success",
    }),
    [getDetailCars.rejected]: (state) => ({
      ...state,
      carsStatus: "failed",
    }),
    [deleteCar.pending]: (state) => ({
      ...state,
      deleteStatus: "loading",
    }),
    [deleteCar.fulfilled]: (state, action) => ({
      ...state,
      cars: action.payload,
      deleteStatus: "success",
    }),
    [deleteCar.rejected]: (state) => ({
      ...state,
      deleteStatus: "failed",
    }),
  },
});

// Action creators are generated for each case reducer function

export const selectDetailCars = (state) => state.cars.cars;
export const { carDetail } = carSlice.actions;

export default carSlice.reducer;
