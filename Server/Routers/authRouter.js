const express = require("express");
const getNewAccessetToken = require("../controller/Auth/accessToken");
const login = require("../controller/Auth/login");
const logout = require("../controller/Auth/logout");
const passport = require("passport");
const verifyToken = require("../middleware/auth");


const authRouter = express.Router();

authRouter.post("/login",login);
authRouter.post("/token", getNewAccessetToken);     
authRouter.post("/logout", logout);


module.exports = authRouter;    

