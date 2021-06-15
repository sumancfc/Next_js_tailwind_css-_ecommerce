import { combineReducers } from "redux"
import cartReducer from "./cartReducer"
import wishlistReducer from "./wishlistReducer"

const rootReducer = combineReducers({
    cartData: cartReducer,
    wishlistData: wishlistReducer,
})

export default rootReducer
