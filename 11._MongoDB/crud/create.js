import db from "../createConnection.js"

const addNewActor = await db.actors.insertOne({name : "Nicholas Cage", movies: ["Face Off", "Gone in 60 Seconds"], money: 250});


console.log(addNewActor);


