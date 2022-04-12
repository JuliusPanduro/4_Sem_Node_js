import bcrypt from "bcrypt";

const saltRounds = 12;
const plaintextPassword = "hunter12";
const hashedPassword = "$2b$12$5lr7rUxb8j4ppYJW54SX7uZKxMFkdzPAFUKwnOgU7PtHGZLEbUA5S";

async function handlePassword() {
    //TODO This is for the sign up router
        //const hash = await bcrypt.hash(plaintextPassword,saltRounds);
        //console.log(hash);

    //TODO This is for the login router
    const isSame = await bcrypt.compare(plaintextPassword,hashedPassword);
    console.log(isSame);
};

handlePassword();

export default {};