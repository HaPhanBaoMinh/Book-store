const adminAccount = require("../../Models/Account/adminModels");
const jwt = require("jsonwebtoken");
require('dotenv').config();

// Create JWT - AccessToken
const generateToken = async payload => {
    const {_id, username, password} = await payload

    const accessToken = jwt.sign({_id, username, password}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '120s'
    });
    return accessToken
}
 
// Create JWT - RefreshToken
const updateRefreshToken = async (user, refreshToken) => {
    await adminAccount.updateOne({_id: user[0]._id}, {...user, refreshToken: refreshToken });
}

const login = async (req, res, next) => {
    const body = await req.body;
    const user = await adminAccount.find( {username: body.username, password: body.password } );
    if (!user) return res.sendStatus(401);

     // Create JWT
    try {
        const token = await generateToken(user[0])

        const {_id, username, password} =  user[0];

        // console.log({_id, username, password});
        
        const refreshToken = jwt.sign({_id, username, password}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '12h'
        })
        
        updateRefreshToken( user, refreshToken);
        
        const tokens = await {token, refreshToken};
     

        res.json(tokens);
    } catch (error) {
        return res.sendStatus(403);
    }

    
}

module.exports = login