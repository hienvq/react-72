import { AxiosRequestConfig } from "axios";
import axiosClient from "./index";

const getUsers = (config: AxiosRequestConfig) => {
  //config = {params: {limit:10, offset: 0}}
  return axiosClient.get("user", config); // .../api/v1/users?limit=10&offset=0
};
const deleteUsers = (id: string) => {
  return axiosClient.delete(`user/${id}`); //delete localhost:8080/api/v1/users/1
};
const addUsers = (payload: { name: string; age: number }) => {
  return axiosClient.post("user", payload);
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
