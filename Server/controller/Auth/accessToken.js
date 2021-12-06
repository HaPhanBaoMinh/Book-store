const adminAccount = require("../../Models/Account/adminModels");
const jwt = require("jsonwebtoken");
require('dotenv').config()

const generateToken = async payload => {
    const {_id, username, password} = payload

    const accessToken = jwt.sign({_id, username, password}, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: '15s'
    });
    return accessToken
}

const getNewAccessetToken = async (req, res) => {
    const refreshToken = await req.body.refreshToken;

     if(!refreshToken) return res.sendStatus(401);

    const user = await adminAccount.find({ refreshToken: refreshToken });

    if(!user) return res.sendStatus(403);

    try {

        const tokens = await generateToken(user[0]);
        res.json({tokens});

    } catch (error) {
        console.log(error);
        return res.sendStatus(403);
    }

    }

module.exports = getNewAccessetToken