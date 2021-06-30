import { combineReducers } from "redux"
import cartReducer from "./cartReducer"
import { productLists } from "./productReducer"
import wishlistReducer from "./wishlistReducer"

const rootReducer = combineReducers({
    cartData: cartReducer,
    wishlistData: wishlistReducer,
    productLists: productLists,
})

export default rootReducer
