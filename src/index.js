import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/common.less";
import "./assets/css/font.css";
import "./assets/css/iconfont.css";
import AppRouter from "./router";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./utils/init.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
