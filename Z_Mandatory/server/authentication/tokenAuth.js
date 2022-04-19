import jwt from "jsonwebtoken";

export function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
   // console.log("authheader ",authHeader);
    const token = authHeader && authHeader.split(' ')[1]
   // console.log("token ",token);
    if (token == null) return res.sendStatus(401);

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(error,user)=>{
        if(error) return res.sendStatus(403)
        req.user = user;
        next();
    });
};

