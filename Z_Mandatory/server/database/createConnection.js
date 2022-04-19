import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGODB_URL;

const dbName = process.env.MONGO_DB;

const connection = await MongoClient.connect(url);

const db = connection.db(dbName);

export default {
    WebshopUsers: db.collection("WebshopUsers")
}