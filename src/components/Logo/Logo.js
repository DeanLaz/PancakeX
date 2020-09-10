import React from "react";

import classes from "./Logo.module.css";
import pancakeLogo from "../../assets/images/pancake-logo.png";
const logo = (props) => {
  return (
    <div>
      <img src={pancakeLogo} alt="PancakeX" className={classes.Logo}></img>
    </div>
  );
};
export default logo;
