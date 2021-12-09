const jwt = require("jsonwebtoken");
const adminAccount = require("../Models/Account/adminModels");
require("dotenv").config;

const checkUserData = async (user) => {
    const reuslt = await adminAccount.find({_id: user._id});
    return reuslt
}


const verifyToken = async (req, res, next) => {
    // const authHeader = req.header('Authorization');
    const tokens =  req.cookies.token;
    // const tokens = authHeader && authHeader.split(" ")[1];

    // console.log(tokens);

    if(!tokens) { res.status(401); }

    try {
        const decoded = jwt.verify(tokens, process.env.ACCESS_TOKEN_SECRET);
        console.log(decoded);
        const result = await checkUserData(decoded);


        if(result) return next()
        
    } catch (error) {
        // return res.sendStatus(403);
        return res.redirect("/login-page");

    }    

   
}

module.exports = verifyToken