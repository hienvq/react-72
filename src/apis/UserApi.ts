import axiosClient from "./index";

const getUsers = () => {
  return axiosClient.get("users");
};
const deleteUsers = (id: string) => {
  return axiosClient.delete(`users/${id}`); //delete localhost:8080/api/v1/users/1
};
const addUsers = (payload: { name: string; age: number }) => {
  return axiosClient.post("users", payload);
};
export { getUsers, addUsers, deleteUsers };
