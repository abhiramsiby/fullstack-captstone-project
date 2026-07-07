// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
// MongoDB connection URL with authentication options
let url = "mongodb://root:hNNOndK056CBtY8nPNHn53hO@172.21.139.37:27017";
let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url);      

    // Task 1: Connect to MongoDB
    await client.connect();
    // Task 2: Connect to database giftDB and store in variable dbInstance
     dbInstance=client.db(dbName);

    // Task 3: Return database instance
    return dbInstance;
}

module.exports = connectToDatabase;
