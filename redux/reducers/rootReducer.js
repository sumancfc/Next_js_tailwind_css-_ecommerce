import { combineReducers } from "redux"
import cartReducer from "./cartReducer"
import globalReducer from "./globalReducer"
import { productLists } from "./productReducer"
import wishlistReducer from "./wishlistReducer"

const rootReducer = combineReducers({
    cartData: cartReducer,
    wishlistData: wishlistReducer,
    productLists: productLists,
    globalData: globalReducer,
})

export default rootReducer
