import axios from "axios";

import tokenApi from "./tokenApi";

const getBinarApi = () =>
  axios.get("https://bootcamp-rent-car.herokuapp.com/admin/car");

const getBinarById = (binarId) =>
  axios.get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${binarId}`);

const deleteApi = (carId) => tokenApi.delete(`/admin/car/${carId}`);

export { deleteApi, getBinarApi, getBinarById };
