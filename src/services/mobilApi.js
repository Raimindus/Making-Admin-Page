import axios from "axios";

import tokenApi from "./tokenApi";

const getBinarApi = () =>
  axios.get("https://bootcamp-rent-car.herokuapp.com/admin/car");

const getBinarById = (binarId) =>
  axios.get(`https://bootcamp-rent-car.herokuapp.com/admin/car/${binarId}`);

const deleteApi = (carId) => tokenApi.delete(`/admin/car/${carId}`);

const putApi = (editEntry) => tokenApi.put(`/admin/car/${editEntry}`);

const postApi = () => tokenApi.post(`/admin/car`);

const getMonthlyReport = async (months) =>{
  try {
    const res = await tokenApi.get(`/admin/order/reports?from=${months[0]}&until=${months[1]}`);
    console.log(res.data);
    return res.data;
  } catch (e) {
    console.error(e);
    return e
  }
} 

export { deleteApi, getBinarApi, getBinarById, getMonthlyReport,postApi, putApi };
