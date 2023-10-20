import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://64cbbf882eafdcdc8519400a.mockapi.io/",
  headers: {
    token: "ABC",
  },
});
axiosClient.interceptors.request.use(
  function (config) {
    console.log("HienVQ ~  config:", config);
    // Do something before request is sent
    if (config.url === "users") {
      config.headers.test = "check";
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(
  function (response: any) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default axiosClient;
