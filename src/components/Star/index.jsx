import React from "react";
import "./style.less";

const Star = (props) => {
  let num = props.num;
  if (num > 5) num = 5;

  return (
    <div className="star-container">
      {[1, 2, 3, 4, 5].map((ele, index) => {
        let show =
          num >= ele ? (
            <i key={index} className="icon-star light"></i>
          ) : (
            <i key={index} className="icon-star"></i>
          );
        return show;
      })}
    </div>
  );
};

export default Star;
