import axios from "axios";

import tokenApi from "./tokenApi";

export const getCarsApi = async (params) => {
  try {
    const res = await tokenApi.get(
      `https://bootcamp-rent-cars.herokuapp.com/admin/v2/car/`,
      { params: { category: params } }
    );
    return res;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const deleteEntry = async (id) => {
  try {
    const res = await tokenApi.delete(
      `https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`
    );
    return res;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const postEntry = async (payload) => {
  try {
    await tokenApi.post(
      `https://bootcamp-rent-cars.herokuapp.com/admin/car`,
      payload,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (e) {
    console.error(e);
  }
};

export const putEntry = async (id, payload) => {
  try {
    await tokenApi.put(
      `https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`,
      payload,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (e) {
    console.error(e);
  }
};

export const getBinarApi = () =>
  axios.get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car");

export const getBinarById = (binarId) =>
  tokenApi.get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${binarId}`);

export const getMonthlyReport = async (months) => {
  try {
    const res = await tokenApi.get(
      `/admin/order/reports?from=${months[0]}&until=${months[1]}`
    );
    return res;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const getPagination = async (params) => {
  try {
    const res = await tokenApi.get(
      `https://bootcamp-rent-cars.herokuapp.com/admin/v2/order`,
      {
        params: { page : params } 
      }
    );    
    return res
  } catch (e) {
    console.error(e);
    return e;
}}