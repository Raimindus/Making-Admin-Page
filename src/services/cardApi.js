import axios from "axios";

import tokenApi from "./tokenApi";

export const getId = async () => {
  try {
    const res = await axios.get(
      "https://bootcamp-rent-car.herokuapp.com/admin/car"
    );
    return res;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const deleteEntry = async (id) => {
  try {
    const res = await axios.delete(
      `https://bootcamp-rent-car.herokuapp.com/admin/car/${id}`
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
      `https://bootcamp-rent-car.herokuapp.com/admin/car`,
      payload
    );
  } catch (e) {
    console.error(e);
  }
};

export const putEntry = async (editEntry, payload) => {
  try {
    await tokenApi.put(
      `https://bootcamp-rent-car.herokuapp.com/admin/car/${editEntry}`,
      payload
    );
  } catch (e) {
    console.error(e);
  }
};
