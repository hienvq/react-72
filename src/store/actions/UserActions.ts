import { getUsers } from "../../apis/UserApi";

export const closeUserModal = () => {
  return { type: "close" };
};

export const closeUserModalAsync = () => {
  return (dispatch: any, getState: any, args: any) => {
    const data = getState();
    console.log("args", args);
    setTimeout(() => {
      dispatch({ type: "close" });
    }, 5000);
  };
};

// React Devtools
// Redux Devtools
