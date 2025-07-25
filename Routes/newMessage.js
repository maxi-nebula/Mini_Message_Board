const express = require("express");
const newMessageRouter = express.Router();

newMessageRouter.get("/", (req, res) => {
  res.send("Wait to add a new message we are working on it.");
});

module.exports = newMessageRouter;
