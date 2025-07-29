//router
//get express , initialize router ,export the router, use the router , test the router
const messages = require("../data");
const dayjs = require("dayjs");

const express = require("express");
const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Message Board",
    messages: messages,
    dayjs: dayjs,
  });
});

module.exports = indexRouter;
