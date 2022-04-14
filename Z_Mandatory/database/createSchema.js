import { db } from "./createConnection.js";

const deleteMode = true;

if (deleteMode) {
    db.exec("DROP TABLE IF EXISTS users;");
}

db.exec(`CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(100),
    password VARCHAR(100),
    name VARCHAR(100),
    email VARCHAR(100)
);`);