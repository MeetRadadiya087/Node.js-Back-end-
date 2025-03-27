const jwt = require('jsonwebtoken');

const authentication = (req , res , next) => {
    let token = req.header("Authorization");
    if(!token){
        return res.status(401).json({message : "Authorization token not found"});
    }

    if (!token.startsWith("Bearer ")) {
        return res.status(401).json({message : "Invalid token format"});
    }

    let newToken = token.slice(7 , token.length);
    try {
        let decode = jwt.verify(newToken, "employee000");
        req.user = decode;
        next();
    } catch (error) {
        return res.status(401).json({message : "Invalid token"});
    }
}

module.exports = authentication;