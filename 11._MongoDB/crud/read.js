import db from "../createConnection.js"

const allActors = await db.actors.find().toArray();

const brokenNicholasCage = await db.actors.find({ $lt: {money:300} }).toArray();

//console.log(allActors);

console(brokenNicholasCage);
