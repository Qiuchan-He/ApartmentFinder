import React, { useState, useEffect } from "react";
import api from "../../../../api";
import HomeHotView from "../HomeHotView";

const HomeHotList = (props) => {
  const [hot1List, setHot1List] = useState([]);
  const [hot2List, setHot2List] = useState([]);

  useEffect(() => {
    api
      .getHomeHot1({
        cityName: props.cityName,
      })
      .then((res) => {
        if (res.data.status === 200) {
          setHot1List(res.data.result);
          console.log(res.data.result);
        }
      });
  }, []);

  useEffect(() => {
    api
      .getHomeHot2({
        cityName: props.cityName,
      })
      .then((res) => {
        if (res.data.status === 200) {
          setHot2List(res.data.result);
        }
      });
  }, []);

  return (
    <div>
      {hot1List.length > 0 ? (
        <HomeHotView data={hot1List} title={"热门商品"} />
      ) : (
        <div>Loading data</div>
      )}
      {hot2List.length > 0 ? (
        <HomeHotView data={hot2List} title={"新品推荐"} />
      ) : (
        <div>Loading data</div>
      )}
    </div>
  );
};

export default HomeHotList;
