import React from "react";

export default function Test() {
  // const [count, setCount] = React.useState(0);
  // const handleIncrease = () => {
  //   // setCount(count + 1);
  //   dispatch("inc");
  // };
  // const handleDescrease = () => {
  //   // setCount(count - 1);
  //   dispatch("desc");
  // };

  const [object, dispatch] = React.useReducer(
    (
      state: any,
      action: {
        type: string;
        newValue: string;
      }
    ) => {
      switch (action.type) {
        case "v1":
          return {
            ...state,
            value1: action.newValue,
          };
        case "v2":
          return {
            ...state,
            value2: action.newValue,
          };
        case "v3":
          return {
            ...state,
            value3: action.newValue,
          };
      }
    },
    {
      value1: "",
      value2: "",
      value3: "",
    }
  );

  return (
    <>
      <button onClick={() => dispatch({ type: "v1", newValue: new Date().toLocaleTimeString() })}>Update 1</button>
      <button onClick={() => dispatch({ type: "v2", newValue: new Date().toLocaleTimeString() })}>Update 2</button>
      <button onClick={() => dispatch({ type: "v3", newValue: new Date().toLocaleTimeString() })}>Update 3</button>
      <div>{JSON.stringify(object)}</div>
    </>
  );
}
