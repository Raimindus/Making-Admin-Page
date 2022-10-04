import axios from "axios";

const tokenApi = axios.create({
  baseURL: "https://bootcamp-rent-car.herokuapp.com",
  headers: {
    access_token: JSON.parse(localStorage.getItem("auth")).access_token,
  },
});

// eslint-disable-next-line consistent-return
export const id = async () => {
  try {
    const res = await axios.get(
      "https://bootcamp-rent-car.herokuapp.com/admin/car"
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

export default tokenApi;
