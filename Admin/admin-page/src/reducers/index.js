import { combineReducers } from "redux";

import  bookList  from "./bookListReducer";
import orderList from "./orderListReducer";
import posterList from "./posterListReducer";
import monthRevenue from "./revenue"

export default combineReducers({
    bookList,
    orderList,
    posterList,
    monthRevenue
})