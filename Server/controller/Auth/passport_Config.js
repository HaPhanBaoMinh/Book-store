const adminAccount = require("../../Models/Account/adminModels");

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

let jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'secret'

module.exports = passport => {

passport.use(new JwtStrategy(jwtOptions, async (jwt_payload, done) => {
    try {
        const user = await adminAccount.findOne({ username: jwt_payload.username, password: jwt_payload.password })
        
        if(!user) return done(null, false);
        return done(null, user);

    } catch (e) {
        done(error)
    }
        // console.log(user);
    return done(null, true);
})) 
}