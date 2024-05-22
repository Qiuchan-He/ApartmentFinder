import axios from "../utils/request.js";

/*路径地址*/
const base = {
  baseUrl: "http://localhost:5566",
  homehot1: "/api/home/hot1",
  homehot2: "/api/home/hot2",
  search: "/api/search",
  details: "/api/details",
  login: "/api/login",
  comment: "/api/comment",
  orderComment: "/api/order/comment",
  submitComment: "/api/order/submit/comment",
};

/*请求方法 */
const api = {
  /**获取首页热门产品 */
  getHomeHot1(params) {
    return axios.get(base.baseUrl + base.homehot1, {
      params,
    });
  },

  getHomeHot2(params) {
    return axios.get(base.baseUrl + base.homehot2, {
      params,
    });
  },

  /**搜索 */
  search(params) {
    return axios.get(base.baseUrl + base.search, { params });
  },

  /**detail.page*/
  details(params) {
    return axios.get(base.baseUrl + base.details, {
      params,
    });
  },

  /**login */

  login(params) {
    return axios.post(base.baseUrl + base.login, params);
  },

  /**comments  */

  comment(params) {
    return axios.get(base.baseUrl + base.comment, {
      params,
    });
  },

  orderComment(params) {
    return axios.get(base.baseUrl + base.orderComment, {
      params,
    });
  },

  submitComment(params) {
    return axios.post(base.baseUrl + base.submitComment, params);
  },
};

export default api;
