import { API_URL } from "@/config/index"
import { FETCH_PRODUCTS_SUCCESS } from "../constants/productConstants"

//get all products
export const getAllProductsFrom = () => async (dispatch) => {
    try {
        const res = await fetch(`${API_URL}/api/product`)
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data })
        console.log(res.data)
    } catch (err) {
        console.log(err)
    }
}
