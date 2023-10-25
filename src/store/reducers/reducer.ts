const initialState = {
  number: 0,
  text: "ABC",
};

type MyAction = {
  type: "inc" | "desc";
  payload: {
    value: number;
  };
};
export const myReducer = (state = initialState, action: MyAction) => {
  console.log("HienVQ ~  action:", action.type, state);
  switch (action.type) {
    case "inc":
      return {
        ...state,
        number: state.number + action.payload.value,
      };
    case "desc":
      return {
        ...state,
        number: state.number - action.payload.value,
      };
    default: {
      return state;
    }
  }
};
