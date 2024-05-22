const express = require("express");

const router = express.Router();
const homehot = require("./data/home/homehot.js");
const details = require("./data/details");
const url = require("url");
const searchData = require("./data/search");
const Mock = require("mockjs");
var Random = Mock.Random;
const commentData = require("./data/comments");
const orderCommentData = require("./data/order");

/**
 * homepage popular goods data
 */

router.get("/home/hot1", (req, res) => {
  const cityName = url.parse(req.url, true).query.cityName;
  const result = homehot.hot1.filter((element) => {
    if (element.title.split("-")[0] === cityName) return element;
  });
  console.log(res);
  res.send({
    status: 200,
    result: result,
  });
});

router.get("/home/hot2", (req, res) => {
  const cityName = url.parse(req.url, true).query.cityName;
  const result = homehot.hot2.filter((element) => {
    if (element.title.split("-")[0] === cityName) return element;
  });

  res.send({
    status: 200,
    result: result,
  });
});

/**搜索页面 */
router.get("/search", (req, res) => {
  const search = url.parse(req.url, true).query.search;
  let data = Mock.mock({
    hasMore: true,
    "data|3": [
      {
        id: Random.integer(),
        title: Random.sentence(1),
        houseType: "17/19层| 4室1厅 - 273.93 m^2",
        price: "<h3>1300</h3>",
        rentType: Random.cword(2),
        img: Random.image(
          "800x600",
          Random.color(),
          "#FFF",
          "png",
          Random.cword()
        ),
      },
    ],
  });

  res.send({
    status: 200,
    result: data,
  });
});

/**
 * Mock test
 */

router.get("/mock", (req, res) => {
  let data = Mock.mock({
    "data|3": [
      {
        id: Random.integer(),
        title: Random.sentence(1),
        houseType: "17/19层| 4室1厅 - 273.93 m^2",
        price: "<h3>1300</h3>",
        rentType: Random.cword(2),
        img: Random.image("800x600", "#ccc", "#FFF", "png", " "),
      },
    ],
  });

  res.send(data);
});

/**details page */
router.get("/details", (req, res) => {
  const id = url.parse(req.url, true).query.id;
  res.send(details);
});

/** login */
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.send({
      status: 200,
      token: "ahfakjajfoajo.ji9jiawsewbgh.2783huhh",
      nick: username,
    });
  } else {
    res.send({
      status: 400,
      msg: "password is wrong",
    });
  }
});

router.get("/comment", (req, res) => {
  const id = url.parse(req.url, true).query.id;
  res.send({
    status: 200,
    result: commentData,
  });
});

router.get("/order/comment", (req, res) => {
  const username = url.parse(req.url, true).query.username;

  res.send({
    status: 200,
    result: orderCommentData,
  });
});

router.post("/order/submit/comment", (req, res) => {
  const { username, id, content } = req.body;
  res.send({
    msg: "评价成功",
    status: 200,
  });
});

module.exports = router;
