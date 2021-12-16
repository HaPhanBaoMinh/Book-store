const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const morgan = require("morgan");
const cron = require("node-cron");
const path = require("path");
const methodOverride = require('method-override');
const passport = require('passport')
const cookieParser = require('cookie-parser');
const verifyToken = require("./middleware/auth");


// const ReactDOMServer = require("react-dom/server")

//Router
const booksListRouter = require("./Routers/booksListRouter");
const posterListRouter = require("./Routers/posterListRouter");
const orderListRouter = require("./Routers/orderListRouter");
const uploadImageRouter = require("./Routers/uploadImageRouter"); // test
const revenue = require("./Routers/revenue");
const authRouter = require("./Routers/authRouter");


const updateRevenuedayly = require("./function/handleRevenue/updateDaylyRevenue");
const updateRevenuemonthly = require("./function/handleRevenue/updateMonthlyRevenue");
const createNewMonth = require("./function/handleRevenue/createNewMonth");
const resetYearRevenue = require("./function/handleRevenue/resetYear");
const storeRouter = require("./Routers/storeRouter");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

//Middleware 
app.use(bodyParser.json({limit: "30mb", extended: "false" }));
app.use(bodyParser.urlencoded({limit: "30mb", extended: "true" }));
app.use(cors());
app.use(morgan("tiny")); 
app.use(methodOverride('_method'));
app.use(passport.initialize());
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, "../Admin/admin-page/build"))); 
app.use(express.static(path.resolve(__dirname, "../login-page/build"))); 


//STORE PAGE
app.use('/store', storeRouter);

//LOGIN PAGE
app.get('/login-page', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../login-page/build', 'index.html')); 
}); 

app.use("/auth", authRouter);

app.use("/api" ,uploadImageRouter); 
app.use("/api/orderList", orderListRouter);
// app.use(verifyToken);
app.use("/api/booksList", express.static(path.join(__dirname, 'uploads')), booksListRouter);
app.use("/api/posterList", posterListRouter);
app.use("/api/revenue" ,revenue); 

//ADMIN PAGE
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../Admin/admin-page/build', 'index.html'));
    // res.send('hello');
});


//Conect MongoDB
const MONGO_URL = 'mongodb+srv://spiderRumAdmin:spiderRumAdmin@cluster0.mtbg8.mongodb.net'

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then((res, rej) => console.log("connect successfully!"))
.catch((err) => console.log(err.message));

// SetTime to update  
cron.schedule('0 0 0 1 1 *', async () => {
    await resetYearRevenue()
    console.log("New Year!!!");
});
 
cron.schedule('0 0 23 * * *', async () => {
    await updateRevenuedayly();
    await updateRevenuemonthly();
    console.log("Update Day!!!");
});


cron.schedule('0 0 0 1 * *', async () => { 
    await createNewMonth();
    console.log("New Month!!!");
});
    

    //=========== DEMO ==============//
// cron.schedule('0 09 * * * *', async () => {
//     await updateRevenuedayly();
//     console.log("Update Day!!!");
//     await updateRevenuemonthly();
// });

// cron.schedule('0 27 * * * *', async () => {
//     await createNewMonth();
//     console.log("New Month!!!");
// });



