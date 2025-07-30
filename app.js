const express = require("express");
const path = require("node:path");
const app = express();
const indexRouter = require("./Routes/index");
const newMessageRouter = require("./Routes/newMessage");
const PORT = process.env.PORT || 3000;

app.set("Views", path.join(__dirname, "Views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

/*app.get("/", (req, res) => {
  res.end("Mini Message board coming soon..");
});*/

app.use("/", indexRouter);
app.use("/", newMessageRouter);
/*app.post("/newMessage", (req, res) => {
  const { user, text } = req.body;
  messages.push({ text, user, added: new Date() });
});*/

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
