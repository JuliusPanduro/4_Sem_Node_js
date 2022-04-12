import db from "../createConnection.js"

db.actors.updateOne({name: "Nichlas Cage"},{ $push: { movies: "Pig"}});