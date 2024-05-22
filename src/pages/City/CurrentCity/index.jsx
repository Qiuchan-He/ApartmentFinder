import React from "react";
import "./style.less";

const CurrentCity = (props) => {
  return (
    <div className="current-city">
      <h2>Current City: {props.city}</h2>
    </div>
  );
};

export default CurrentCity;
