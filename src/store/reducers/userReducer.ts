import { createAction, createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../../apis/UserApi";

const initialState = {
  isOpen: false,
  initValue: {},
};
export type UserState = {
  isOpen: boolean;
  initValue: {
    id?: string;
    name?: string;
    avatarPath?: string;
  };
};
type MyAction = {
  type: "create" | "edit" | "close";
  payload: {
    isOpen: boolean;
    initValue: {
      id?: string;
      name?: string;
      avatarPath?: string;
    };
  };
};
// export const userReducer = (state = initialState, action: MyAction) => {
//   switch (action.type) {
//     case "create":
//     case "edit":
//       return {
//         isOpen: action.payload.isOpen,
//         initValue: action.payload.initValue,
//       };
//     case "close":
//       return {
//         ...initialState,
//       };
//     default: {
//       return state;
//     }
//   }
// };
// export const createAct: any = createAction("create");
// export const editAct: any = createAction("edit");
// export const closeAct: any = createAction("close");

// export const newUserReducer = createReducer(initialState, {
//   [createAct]: (state: any, action: any) => {
//     return {
//       isOpen: action.payload.isOpen,
//       initValue: action.payload.initValue,
//     };
//   },
//   [editAct]: (state: any, action: any) => {
//     return {
//       isOpen: action.payload.isOpen,
//       initValue: action.payload.initValue,
//     };
//   },
//   [closeAct]: () => {
//     return {
//       ...initialState,
//     };
//   },
// });

export const asyncAction: any = createAsyncThunk("async-action", async (action) => {
  console.log("HienVQ ~  action:", action);
  const response = await getUsers({});
  console.log("HienVQ ~  response:", response.data);
  return { success: true };
  // throw new Error("ABC");
});
export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    createAct: (state: any, action: any) => {
      return {
        isOpen: action.payload.isOpen,
        initValue: action.payload.initValue,
      };
    },
    editAct: (state: any, action: any) => {
      return {
        isOpen: action.payload.isOpen,
        initValue: action.payload.initValue,
      };
    },
    closeAct: () => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: {
    [asyncAction.fulfilled]: (state: any, action: any) => {
      console.log("HienVQ ~  fulfilled:", action);
      return { ...state };
    },
    [asyncAction.rejected]: (state: any, action: any) => {
      console.log("HienVQ ~  rejected:");

      return { ...state };
    },
  },
});

export const { createAct, editAct, closeAct } = userSlice.actions;

export default userSlice.reducer;
