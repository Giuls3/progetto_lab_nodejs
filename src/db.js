const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "local";

async function main(collectionName) {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  // the following code examples can be pasted here...

  return collection;
}

async function getAllArticle() {
  const collection = await main("domusMirabilia");
  const findResult = await collection.find({}).toArray();
  console.log("FOUND", findResult);
  return findResult;
}

async function getArticleById(id) {
  try {
    const collection = await main("domusMirabilia");
    const findResult = await collection.find({_id : id}).toArray();
  } catch (e) {
    console.error(e);
    return [];
  }
}

function closeConnection() {
  client.close();
}

module.exports.getAllArticle = getAllArticle;
module.exports.getArticleById = getArticleById;
module.exports.closeConnection = closeConnection;
