const express = require("express");
const newMessageRouter = express.Router();
const messages = require("../data");

newMessageRouter.post("/newMessage", (req, res) => {
  const { user, text } = req.body;
  console.log({ user, text });
  messages.push({ user, text, added: new Date() });
  res.redirect("/");
});

module.exports = newMessageRouter;
