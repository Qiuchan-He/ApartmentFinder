import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as collectActions from "../../../redux/actions/collect.js";
import "./style.less";

const BuyAndStoreView = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isCollect, setIsCollect] = useState(false);

  useEffect(() => {
    setIsCollect(isStore());
  }, []);

  function storeHandle() {
    if (props.user.token) {
      //判断是否已经收藏，若收藏，则取消，反之则收藏
      if (isStore()) {
        //已收藏
        setIsCollect(false);
        dispatch(collectActions.removeCollect(props.id));
      } else {
        //未收藏
        setIsCollect(true);
        dispatch(collectActions.setCollect(props.id));
      }
    } else {
      navigate("/login");
    }
  }

  function isStore() {
    let collects = props.collects;
    let id = props.id;
    return collects.some((item) => {
      return item === id;
    });
  }

  return (
    <div className="buy-store-container clear-fix">
      <div className="item-container float-left">
        {isCollect ? (
          <button className="selected o" onClick={storeHandle}>
            已收藏
          </button>
        ) : (
          <button className="selected" onClick={storeHandle}>
            收藏
          </button>
        )}
      </div>
      <div className="item-container float-right">
        <button className="selected">购买</button>
      </div>
      <div></div>
    </div>
  );
};

export default BuyAndStoreView;
