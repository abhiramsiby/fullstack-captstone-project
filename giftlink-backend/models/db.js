// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
// MongoDB connection URL with authentication options
let url = "mongodb://root:pgC2CZQ0UZu3kHGuN4hEPXJS@172.21.194.250:27017";
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
