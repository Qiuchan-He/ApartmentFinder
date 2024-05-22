import React, { useState, useEffect } from "react";
import api from "../../../api";
import OrderListView from "../OrderListView";

const OrderList = (props) => {
  const [orderListData, setOrderListData] = useState([]);

  useEffect(() => {
    api
      .orderComment({
        username: props.user.nick,
      })
      .then((res) => {
        if (res.data.status === 200) {
          setOrderListData(res.data.result);
        }
      });
  }, []);

  return (
    <div>
      {orderListData.length > 0 ? (
        <OrderListView data={orderListData} user={props.user} />
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default OrderList;
