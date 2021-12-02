const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const morgan = require("morgan");
const cron = require("node-cron");
const path = require("path");
const methodOverride = require('method-override');

//Router
const booksListRouter = require("./Routers/booksListRouter");
const posterListRouter = require("./Routers/posterListRouter");
const orderListRouter = require("./Routers/orderListRouter");
const uploadImageRouter = require("./Routers/uploadImageRouter"); // test
const revenue = require("./Routers/revenue");

const updateRevenuedayly = require("./function/handleRevenue/updateDaylyRevenue");
const updateRevenuemonthly = require("./function/handleRevenue/updateMonthlyRevenue");
const createNewMonth = require("./function/handleRevenue/createNewMonth");
const resetYearRevenue = require("./function/handleRevenue/resetYear");


const multer = require('multer');
const upload = multer({dest: 'uploads'});

const app = express();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

//Middleware
app.use(bodyParser.json({limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({limit: "30mb", extended: "true" }));
app.use(cors());
app.use(morgan("tiny")); 
app.use(methodOverride('_method'));


//Routers 
app.use("/api/booksList", express.static(path.join(__dirname, 'uploads')), booksListRouter);
app.use("/api/orderList", orderListRouter);
app.use("/api/posterList", posterListRouter);
app.use("/api/revenue" ,revenue); 
app.use("/api" ,uploadImageRouter); 
 

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



