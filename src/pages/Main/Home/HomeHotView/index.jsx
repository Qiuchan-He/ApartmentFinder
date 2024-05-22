import React from "react";
import "./style.less";

const HomeHotView = (props) => {
  let arr = new Array(3).fill(1);

  return (
    <div className="hotproduct">
      <h3>{props.title}</h3>
      <div className="hot-container">
        <ul className="clear-fix">
          {arr.map((ele, index) => {
            return (
              <li key={index}>
                <a href={props.data[0].link}>
                  <img src={props.data[0].img} alt="" />
                  <span>{props.data[0].title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HomeHotView;
