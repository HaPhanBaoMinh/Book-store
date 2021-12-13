const adminAccount = require("../../Models/Account/adminModels");
const jwt = require("jsonwebtoken");
require('dotenv').config()

const generateToken = async payload => {
    const {_id, username, password} = await payload

    const accessToken = jwt.sign({_id, username, password}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '120s'
    });
    return accessToken
}

const getNewAccessetToken = async (req, res) => {
    const refreshTokens = await req.body.refreshToken;

    // console.log(req.body);




     if(!refreshTokens) return res.sendStatus(401);
 
    const user = await adminAccount.find({ refreshToken: refreshTokens })


    // console.log(user);

    if(!user.length) return res.sendStatus(403);

    try {

        const tokens = await generateToken(user[0]);
        // console.log({tokens});
        await res.json({tokens});

    } catch (error) {
        // console.log(error);
        return res.sendStatus(403);
    }

    }

module.exports = getNewAccessetToken