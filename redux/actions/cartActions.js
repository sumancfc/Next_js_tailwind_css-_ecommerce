import {
    ADD_TO_CART,
    DECREASE_QUANTITY,
    DELETE_ALL_FROM_CART,
    DELETE_FROM_CART,
} from "../constants/cartConstants"

//add to cart
export const addToCart = (item, quantityCount, selectedProductColor, selectedProductSize) => {
    return (dispatch) => {
        dispatch({
            type: ADD_TO_CART,
            payload: {
                ...item,
                quantity: quantityCount,
                selectedProductColor: selectedProductColor
                    ? selectedProductColor
                    : item.selectedProductColor
                    ? item.selectedProductColor
                    : null,
                selectedProductSize: selectedProductSize
                    ? selectedProductSize
                    : item.selectedProductSize
                    ? item.selectedProductSize
                    : null,
            },
        })
    }
}

//decrease from cart
export const decreaseQuantity = (item) => {
    return (dispatch) => {
        dispatch({
            type: DECREASE_QUANTITY,
            payload: item,
        })
    }
}

//delete from cart
export const deleteFromCart = (item) => {
    return (dispatch) => {
        dispatch({ type: DELETE_FROM_CART, payload: item })
    }
}

//delete all from cart
export const deleteAllFromCart = () => {
    return (dispatch) => {
        dispatch({ type: DELETE_ALL_FROM_CART })
    }
}

//get stock of cart item
export const cartItemStock = (item, color, size) => {
    if (item.stock) {
        return item.stock
    } else {
        return item.variation
            .filter((single) => single.color === color)[0]
            .size.filter((single) => single.name === size)[0].stock
    }
}
