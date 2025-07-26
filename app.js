const express = require("express");
const path = require("node:path");
const app = express();

app.set("Views", path.join(__dirname, "Views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

const indexRouter = require("./Routes/index");
const newMessageRouter = require("./Routes/newMessage");
const addButton = document.getElementById("addButton");
console.log(addButton);
/*app.get("/", (req, res) => {
  res.end("Mini Message board coming soon..");
});*/

app.use("/index", indexRouter);
app.use("/newMessage", newMessageRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
