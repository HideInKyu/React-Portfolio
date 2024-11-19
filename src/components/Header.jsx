import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <img src={props.img} alt="" />
    </div>
  );
};

export default Header;
