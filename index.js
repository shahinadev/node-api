const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

//app listening
app.get("/", (req, res) => {
  res.send("Server is running.");
});

app.listen(8080, () => {
  console.log("server is running");
});
