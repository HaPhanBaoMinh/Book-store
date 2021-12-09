const adminAccount = require("../../Models/Account/adminModels");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const updateRefreshToken = async (user, refreshToken) => {
    await adminAccount.updateOne({_id: user._id}, {...user, refreshToken: refreshToken });
}

const logout = async (req, res, next) => {
    const token = req.body.token;

    console.log(req.body.token);

    if(!token) return res.sendStatus(401);
    
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        res.send(decoded)

        updateRefreshToken(decoded, null)
        res.send(decoded);

    } catch (error) {
        return res.sendStatus(403);
    }


}

module.exports = logout