import { API_URL, PRODUCT_API_URL } from "@/config/index"
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants"

//get all products
export const getAllProducts = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const res = await fetch(`${PRODUCT_API_URL}/products/products`)

        console.log(res)

        const data = await res.json()

        if (res.ok) {
            dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
        }
        return data
    } catch (err) {
        // console.log(err)
        dispatch({ type: PRODUCT_LIST_FAIL })
    }
}
