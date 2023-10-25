import React from "react";
import { getUsers } from "../apis/UserApi";

const useUserList = () => {
  const [data, setData] = React.useState([]);
  const getData = async () => {
    const userList = await getUsers({});
    setData(userList.data);
  };

  React.useEffect(() => {
    getData();
  }, []);
  return [data, getData];
};

export default useUserList;
