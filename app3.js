// https://expressjs.com/en/starter/hello-world.html
const express = require("express");
const { connect, myCollection, myCollectionName } = require("./initMongo");
const app = express();
const port = 3000;

app.use(express.json());

// home
app.get("/", (req, res) => {
  console.log("myCollection?", myCollection);
  res.send("BeIndian App");
});

// users
app.get("/users", (req, res) => {
  res.send(beRealUsers);
});

// create
app.post("/create", (req, res) => {
  beRealUsers.push(req.body);
  res.send("User created successfully. Total Users:" + beRealUsers.length);
});

// clear
app.delete("/clear", (req, res) => {
  beRealUsers = [];
  res.send("All users cleared.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

connect();
