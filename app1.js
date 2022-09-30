// https://expressjs.com/en/starter/hello-world.html
const express = require("express");
const app = express();
const port = 3000;

// home
app.get("/", (req, res) => {
  res.send("Hello World!   " + new Date());
});

// info
app.get("/info", (req, res) => {
  res.send("Life is awesome.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
