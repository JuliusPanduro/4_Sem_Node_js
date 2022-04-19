import db from "./createConnection.js"

export function getAllUsers(){
return db.WebshopUsers.find().toArray();
};


export function addNewUser(newUser){
     return db.WebshopUsers.insertOne(newUser);
};

export  function findUser(email){
    return db.WebshopUsers.findOne({email: email});
};
