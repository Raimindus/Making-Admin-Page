import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  deleteEntry,
  getBinarById,
  getCarsApi,
  getMonthlyReport,
  postEntry,
  putEntry,
} from "../../../services/cardApi";

export const getCars = createAsyncThunk("MobilApi/getCars", async () => {
  const res = await getCarsApi();
  return res.data;
});
export const getDetailCars = createAsyncThunk(
  "MobilApi/getBinarApi",
  async (binarId) => {
    const res = await getBinarById(binarId);
    return res.data;
  }
);

export const deleteCar = createAsyncThunk("/admin/v2/car/", async (carId) => {
  const res = await deleteEntry(carId);
  return res.data;
});

export const putCar = createAsyncThunk("/admin/v2/putCar", async (carId) => {
  const res = await putEntry(carId);
  return res.data;
});

export const postCar = createAsyncThunk("admin/v2/postCar", async (payload) => {
  const res = await postEntry(payload);
  return res.data;
});

export const getMonthly = createAsyncThunk(
  "admin/getMonthly",
  async (months) => {
    const res = await getMonthlyReport(months);
    return res;
  }
);

const initialState = {
  cars: {},
  allCars: {},
  allCarsStatus: "idle",
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
    [getCars.pending]: (state) => ({
      ...state,
      allCarsStatus: "loading",
    }),
    [getCars.fulfilled]: (state, action) => ({
      ...state,
      allCars: action.payload,
      allCarsStatus: "success",
    }),
    [getCars.rejected]: (state) => ({
      ...state,
      allCarsStatus: "failed",
    }),
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
