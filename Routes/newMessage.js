const express = require("express");
const newMessageRouter = express.Router();

newMessageRouter.post("/newMessage", (req, res) => {
  const receivedData = req.body;
  console.log(receivedData);
  res.send("message sent successfully");
});

module.exports = newMessageRouter;
