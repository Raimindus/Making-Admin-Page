import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { deleteEntry, postEntry, putEntry } from "../../../services/cardApi";
import { getBinarById, getMonthlyReport } from "../../../services/mobilApi";

export const getDetailCars = createAsyncThunk(
  "MobilApi/getBinarApi",
  async (binarId) => {
    const res = await getBinarById(binarId);
    return res.data;
  }
);

export const deleteCar = createAsyncThunk("/admin/car/", async (carId) => {
  const res = await deleteEntry(carId);
  return res.data;
});

export const putCar = createAsyncThunk("/admin/putCar", async (carId) => {
  const res = await putEntry(carId);
  return res.data;
});

export const postCar = createAsyncThunk("admin/postCar", async () => {
  const res = await postEntry();
  return res.data;
});

export const getMonthly = createAsyncThunk("admin/getMonthly" , async (months) => {
  const res = await getMonthlyReport(months);
  return res;
});

const initialState = {
  cars: {},
  monthly: {},
  carsStatus: "idle",
  deleteStatus: "idle",
  putStatus: "idle",
  postStatus: "idle",
  monthlyStatus: "idle",
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
    [putCar.pending]: (state) => ({
      ...state,
      deleteStatus: "loading",
    }),
    [putCar.fulfilled]: (state, action) => ({
      ...state,
      cars: action.payload,
      deleteStatus: "success",
    }),
    [putCar.rejected]: (state) => ({
      ...state,
      deleteStatus: "failed",
    }),
    [postCar.pending]: (state) => ({
      ...state,
      deleteStatus: "loading",
    }),
    [postCar.fulfilled]: (state, action) => ({
      ...state,
      cars: action.payload,
      deleteStatus: "success",
    }),
    [postCar.rejected]: (state) => ({
      ...state,
      deleteStatus: "failed",
    }),
  },
});

// Action creators are generated for each case reducer function

export const selectDetailCars = (state) => state.cars.cars;
export const { carDetail } = carSlice.actions;

export default carSlice.reducer;
