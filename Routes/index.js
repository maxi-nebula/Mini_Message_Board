//router
//get express , initialize router ,export the router, use the router , test the router

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
];

const express = require("express");
const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.render("index", {
    messages: messages.text,
  });
});

module.exports = indexRouter;
