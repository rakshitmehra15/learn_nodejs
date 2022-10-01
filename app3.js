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
app.get("/users", async (req, res) => {
  const usersCC = await userCollection.find();
  console.log("users?", usersC.C);
  res.send(usersC);
});

// create
app.post("/create", async (req, res) => {
  // beRealUsers.push(req.body);
  await createUser(req.body);
  // res.send("User created successfully. Total Users:" + beRealUsers.length);
  res.send("User created successfully.");
});

// delete all users - clear
app.delete("/clear", async (req, res) => {
  await userCollection.deleteMany();
  res.send("All users cleared.");
});

app.delete("/clear_one", async (req, res) => {
  await userCollection.deleteOne({ username: req.body.username });
  res.send("One user deleted.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

connect();
