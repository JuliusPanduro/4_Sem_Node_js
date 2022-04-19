import bcrypt from "bcrypt"



export async function encryptPassword(password){
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password,saltRounds);
    return hashedPassword;    
}

export function comparePassword(password,hashedPassword){
    return bcrypt.compare(password,hashedPassword);
}