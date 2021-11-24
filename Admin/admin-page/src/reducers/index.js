import { combineReducers } from "redux";

import  bookList  from "./bookListReducer";
import orderList from "./orderListReducer";

export default combineReducers({
    bookList,
    orderList
})