import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  DELETE_ALL_FROM_CART,
  DELETE_FROM_CART,
} from "../constants/cartConstants"

// add to cart
export const addToCart = (
  item,
  toast,
  quantityCount,
  selectedProductColor,
  selectedProductSize
) => {
  return (dispatch) => {
    if (toast) toast("Added To Cart")

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
