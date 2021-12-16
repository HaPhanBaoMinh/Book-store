import { combineReducers } from "redux";
import bookList from "./bookListReducer";
import posterList from "./posterListReducer";
import cartList from "./cartListReducer";
import sumPrice from "./sumPriceReducer";

export default combineReducers({
    bookList,
    posterList,
    cartList,
    sumPrice
})
 