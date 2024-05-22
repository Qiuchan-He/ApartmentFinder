import React from "react";
import "./style.less";
import { useNavigate } from "react-router-dom";

const PubHeader = (props) => {
  const navigate = useNavigate();

  function backHandle() {
    /**返回上一业的两种方案 */
    navigate(-1);

    //window.history.back()
  }

  return (
    <div id="common-header">
      <span className="back-icon" onClick={backHandle}>
        <i className="icon-chevron-left"></i>
      </span>
      <h1>{props.title}</h1>
    </div>
  );
};

export default PubHeader;
