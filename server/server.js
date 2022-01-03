const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("APi is running-");
});
const Port = process.env.PORT || 5000;

app.listen(Port, () => console.log(`server is running on port ${Port}`));
