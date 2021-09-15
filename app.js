const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("데리버거!");
});

app.listen(4000, () => {
  console.log("4000 SERVER START!");
});
