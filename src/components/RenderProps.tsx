import React from "react";

const RenderProps = (props: { callbackFn: (data: any) => any }) => {
  const [data, setData] = React.useState({
    x: 0,
    y: 0,
  });
  const handleMouseMove = (event: any) => {
    setData({
      x: event.clientX,
      y: event.clientY,
    });
  };
  return <div onMouseMove={handleMouseMove}>{props.callbackFn(data)}</div>;
};

export default RenderProps;
