import { FETCH_PRODUCTS_SUCCESS } from "../constants/productConstants"

export const productReducer = (state = { products: [] }, action) => {
    if (action.type === FETCH_PRODUCTS_SUCCESS) {
        return { ...state, products: action.payload }
    }

    return state
}
