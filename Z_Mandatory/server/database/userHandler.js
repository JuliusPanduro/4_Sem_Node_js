import db from "./createConnection.js"


/*
import bcrypt from "bcrypt"
exports.create = async (req,res)=>{
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hasPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        email: req.body.email,
        password: hasPassword,
        name: req.body.name
    });

    try{
        await User.create(user);
        delete user.password;
        res.send(user);
    }catch (error){
        res.status(500).send(error);
        
    }
};




export async function encryptPassword(password){
    const saltRounds = 10;
    const hasPassword = await bcrypt.hash(password,saltRounds);
    
}

export async function comparePassword(password,hashedPassword){
    return await bcrypt.compare(password,hashedPassword);
}
*/

export function getAllUsers(){
return db.WebshopUsers.find().toArray();
};


export function addNewUser(newUser){
     return db.WebshopUsers.insertOne(newUser);
};

export  function findUser(email){
    return db.WebshopUsers.findOne({email: email});
};
