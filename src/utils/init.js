import store from "../redux/store";
import * as loginActions from "../redux/actions/login.js";

//初始化登陆信息

if (localStorage.getItem("goodlive")) {
  store.dispatch(
    loginActions.setLogin(JSON.parse(localStorage.getItem("goodlive")))
  );
}
