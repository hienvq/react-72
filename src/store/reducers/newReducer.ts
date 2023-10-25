const initialState = {
  text: "",
};

type MyAction = {
  type: "update" | "delete";
  payload: {
    value: string;
  };
};
export const myNewReducer = (state = initialState, action: MyAction) => {
  console.log("HienVQ ~  action:", action.type, state);
  switch (action.type) {
    case "update":
      return {
        ...state,
        text: action.payload.value,
      };
    case "delete":
      return {
        ...state,
        text: "",
      };
    default: {
      return state;
    }
  }
};
