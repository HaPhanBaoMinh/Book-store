const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema({
    username: String,
    password: String,
    refreshToken: {
        type: String,
        default: null
    }
    //     { 
    //         taikhoan: "haphanbaominh",
    //         matkhau: "minh1292002", 
    //     },
    //    
})


const myDB = mongoose.connection.useDb('Account');
const adminAccount = myDB.model("admin", adminSchema);

module.exports = adminAccount;