import React from "react";
import Box from "./Box.jsx";

const Container = (props) => {
  const Boxs = props.imgArr.map((img, index) => {
    return <Box key={index} img={img} />;
  });
  return <div className="container">{Boxs}</div>;
};

export default Container;
