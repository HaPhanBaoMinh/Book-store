const jwt = require("jsonwebtoken");
const adminAccount = require("../Models/Account/adminModels");
require("dotenv").config;

const checkUserData = async (user) => {
    const reuslt = await adminAccount.find({_id: user._id});
    return reuslt
}

const verifyToken = async (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(" ")[1];

    if(!token) return res.status(401);

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        // console.log(decoded);
        // const result = await checkUserData(decoded);

        next();
        // res.send(result);
        
    } catch (error) {
        return res.sendStatus(403);
    }    

    // const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // // next();
    // res.send(decoded)
}

module.exports = verifyToken