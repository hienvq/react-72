import React from "react";
import { getUsers } from "../apis/UserApi";
import { PAGE_SIZE } from "../common/constants";

const useUserList = () => {
  const [data, setData] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const getData = async (page: number) => {
    const userList = await getUsers({
      params: {
        _limit: PAGE_SIZE,
        _page: page,
      },
    });
    setData(userList.data);
    console.log("HienVQ ~  userList:", userList);
    setTotal(Number(userList.headers["x-total-count"]));
  };

  React.useEffect(() => {
    getData(1);
  }, []);
  return [data, total, getData];
};

export default useUserList;
