// https://expressjs.com/en/starter/hello-world.html
const express = require("express");
const { connect, userCollection } = require("./initMongo");
const app = express();
const port = 3000;

app.use(express.json());

// const beRealUsers = [];

async function createUser(user) {
  console.log("Creaeting user in database:", user.username);
  await userCollection.update(
    { username: user.username },
    { $set: { ...user } },
    { upsert: true }
  );
}

// home
app.get("/", (req, res) => {
  res.send("BeIndian App");
});

// users
app.get("/users", (req, res) => {
  // res.send(beRealUsers);
  res.send("all users");
});

// create
app.post("/create", async (req, res) => {
  // beRealUsers.push(req.body);
  await createUser(req.body);
  // res.send("User created successfully. Total Users:" + beRealUsers.length);
  res.send("User created successfully.");
});

// clear
app.delete("/clear", (req, res) => {
  // beRealUsers = [];
  res.send("All users cleared.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

connect();
