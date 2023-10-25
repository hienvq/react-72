import { AxiosRequestConfig } from "axios";
import axiosClient from "./index";

const getUsers = (config: AxiosRequestConfig) => {
  return axiosClient.get("users", config);
};
const deleteUsers = (id: string) => {
  return axiosClient.delete(`users/${id}`); //delete localhost:8080/api/v1/users/1
};
const addUsers = (payload: { name: string; age: number }) => {
  return axiosClient.post("users", payload);
};

const login = (username: string, password: string) => {
  return axiosClient.post(
    "auth/login-jwt",
    {},
    {
      params: {
        username,
        password,
      },
    }
  );
};
export { getUsers, addUsers, deleteUsers, login };
