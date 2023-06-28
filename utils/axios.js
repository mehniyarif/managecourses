// axios
import axios from "axios";
const baseURL = "https://dummyjson.com/";

let axiosInstance = axios.create({
  baseURL: baseURL,
  // You can add your headers here
});

export const setAuthHeader = (token) => {
  axiosInstance.post("/auth/login", JSON.stringify({
    username: 'kminchelle',
    password: '0lelplR',
  })).then((response)=>{
    let data = response.json()
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
  })
};


export default axiosInstance;
