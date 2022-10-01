const { MongoClient } = require("mongodb");

const URI = "mongodb://localhost:27017/?maxPoolSize=20&w=majority"; // Connection URI
const DB_NAME = "testdb";

const db = client.db(DB_NAME);
const myCollection = db.collection("my_collection");

const client = new MongoClient(URI); // Create a new MongoClient

const connect = async () => {
  try {
    await client.connect(); // Connect the client to the server (optional starting in v4.7)
    await db.command({ ping: 1 }); // Establish and verify connection
  } catch (e) {
    console.log("Ooops.. failed to connect to db ~Sahil");
    console.dir(e);
  }
};

module.exports = {
  client,
  connect,
  myCollectionName,
  myCollection,
};
