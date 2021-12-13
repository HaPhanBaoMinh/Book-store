import { combineReducers } from "redux";

import  bookList  from "./bookListReducer";
import orderList from "./orderListReducer";
import posterList from "./posterListReducer";
import monthRevenue from "./revenue";
import accountToken from "./accountToken";

export default combineReducers({
    bookList,
    orderList,
    posterList,
    monthRevenue,
    accountToken 
})