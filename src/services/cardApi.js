import axios from "axios";

import tokenApi from "./tokenApi";

export const getCarsApi = async () => {
  try {
    const res = await tokenApi.get(
      "https://bootcamp-rent-cars.herokuapp.com/admin/v2/car"
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
      payload
    );
  } catch (e) {
    console.error(e);
  }
};

export const putEntry = async (editEntry, payload) => {
  try {
    await tokenApi.put(
      `https://bootcamp-rent-cars.herokuapp.com/admin/car/${editEntry}`,
      payload
    );
  } catch (e) {
    console.error(e);
  }
};

export const getBinarApi = () =>
  axios.get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car");

export const getBinarById = (binarId) =>
  axios.get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${binarId}`);
