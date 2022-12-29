import axios from "axios";

const config = {
  baseURL: "https://munchies-api.up.railway.app",
  // timeout: 2000,
  //   withCredentials: true,
};
const axiosClient = axios.create(config);

export default axiosClient;
