import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  deleteEntry,
  getBinarById,
  getCarsApi,
  getMonthlyReport,
  getOrderApi,
  postEntry,
  putEntry,
} from "../../../services/cardApi";

export const getCars = createAsyncThunk(
  "MobilApi/getCars",
  async (category) => {
    const res = await getCarsApi(category);
    console.log(res.data);
    return res.data;
  }
);

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

export const putCar = createAsyncThunk("/admin/putCar", async ({id, payload}) => {
  const res = await putEntry(id, payload);
  return res.data;
});

export const postCar = createAsyncThunk("admin/postCar", async (payload) => {
  const res = await postEntry(payload);
  return res.data;
});

export const getMonthly = createAsyncThunk(
  "admin/getMonths",
  async (months) => {
    const res = await getMonthlyReport(months);
    return res.data;
  }
);

export const getOrder = createAsyncThunk(
  "/admin/getOrder", 
  async (page) => {
  const res = await getOrderApi(page);
  return res.data;
});

const initialState = {
  cars: {},
  allCars: {},
  monthly: [],
  orders: {},
  allCarsStatus: "idle",
  carsStatus: "idle",
  deleteStatus: "idle",
  putStatus: "idle",
  postStatus: "idle",
  monthlyStatus: "idle",
  ordersStatus: "idle",
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
    [getMonthly.pending]: (state) => ({
      ...state,
      monthlyStatus: "loading",
    }),
    [getMonthly.fulfilled]: (state, action) => ({
      ...state,
      monthly: action.payload,
      monthlyStatus: "success",
    }),
    [getMonthly.rejected]: (state) => ({
      ...state,
      monthlyStatus: "failed",
    }),
    [getOrder.pending]: (state) => ({
      ...state,
      ordersStatus: "loading",
    }),
    [getOrder.fulfilled]: (state, action) => ({
      ...state,
      orders: action.payload,
      ordersStatus: "success",
    }),
    [getOrder.rejected]: (state) => ({
      ...state,
      ordersStatus: "failed",
    }),
  },
});

// Action creators are generated for each case reducer function

export const selectMonthlyReport = (state) => state.carSlice.monthly || [];
export const selectOrder = (state) => state.carSlice.orders;
export const { carDetail } = carSlice.actions;

export default carSlice.reducer;
