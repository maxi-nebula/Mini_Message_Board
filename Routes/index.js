//router
//get express , initialize router ,export the router, use the router , test the router
const dayjs = require("dayjs");

const messages = [
  {
    text: "A very good morning!",
    user: "Jeff",
    added: new Date(),
  },
  {
    text: "Hi,howdy",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Hello world",
    user: "Wendy",
    added: new Date(),
  },
];

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
