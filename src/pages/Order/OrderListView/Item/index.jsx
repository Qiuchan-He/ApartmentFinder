import React, { useState, useEffect, useRef } from "react";
import api from "../../../../api";
import "./style.less";

const Item = (props) => {
  const data = props.data;
  const [currentComment, setCurrentComment] = useState(0);
  const commentContent = useRef();

  useEffect(() => {
    setCurrentComment(props.data.commentState);
  }, []);

  function clickHandle() {
    setCurrentComment(1);
  }

  function onSubmitHandle() {
    api
      .submitComment({
        id: data.id,
        username: props.user.nick,
        content: commentContent.current.value,
      })
      .then((res) => {
        if (res.data.status === 200) {
          setCurrentComment(2);
        } else {
          setCurrentComment(0);
        }
      });
    setCurrentComment(0);
  }

  function onCancelHandle() {
    setCurrentComment(0);
  }

  return (
    <div className="order-item-container clear-fix">
      <div className="order-item-img float-left">
        <img src={data.img} alt="" />
      </div>
      <div className="order-item-comment float-right">
        {currentComment === 0 ? (
          <button className="btn" onClick={clickHandle}>
            评价
          </button>
        ) : currentComment === 1 ? (
          ""
        ) : (
          <button className="btn unseleted-btn">已评价</button>
        )}
      </div>
      <div className="order-item-content">
        <span>商户：{data.title}</span>
        <span>类型：{data.houseType}</span>
        <span>价格：{data.price}</span>
      </div>
      {currentComment === 1 ? (
        <div className="comment-text-container">
          <textarea
            ref={commentContent}
            className="comment-text"
            style={{ width: "100%", height: "80px" }}
          ></textarea>
          <button onClick={onSubmitHandle} className="btn">
            提交
          </button>
          &nbsp;
          <button onClick={onCancelHandle} className="btn unselected-btn">
            取消
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Item;
