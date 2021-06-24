import { combineReducers } from "redux"
import cartReducer from "./cartReducer"
import { productReducer } from "./productReducer"
import wishlistReducer from "./wishlistReducer"

const rootReducer = combineReducers({
    cartData: cartReducer,
    wishlistData: wishlistReducer,
    productsData: productReducer,
})

export default rootReducer
