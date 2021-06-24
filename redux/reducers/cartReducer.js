import {
    ADD_TO_CART,
    DECREASE_QUANTITY,
    DELETE_FROM_CART,
    DELETE_ALL_FROM_CART,
    SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants"
import { v4 as uuidv4 } from "uuid"

const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
    // const state = state,
    //     product = action.payload

    const product = action.payload

    if (action.type === ADD_TO_CART) {
        // for non variant products
        if (product.variation === undefined) {
            const cartItem = state.filter((item) => item.id === product.id)[0]
            if (cartItem === undefined) {
                return [
                    ...state,
                    {
                        ...product,
                        quantity: product.quantity ? product.quantity : 1,
                        cartItemId: uuidv4(),
                    },
                ]
            } else {
                return state.map((item) =>
                    item.cartItemId === cartItem.cartItemId
                        ? {
                              ...item,
                              quantity: product.quantity
                                  ? item.quantity + product.quantity
                                  : item.quantity + 1,
                          }
                        : item
                )
            }
            // for variant products
        } else {
            const cartItem = state.filter(
                (item) =>
                    item.id === product.id &&
                    product.selectedProductColor &&
                    product.selectedProductColor === item.selectedProductColor &&
                    product.selectedProductSize &&
                    product.selectedProductSize === item.selectedProductSize &&
                    (product.cartItemId ? product.cartItemId === item.cartItemId : true)
            )[0]

            if (cartItem === undefined) {
                return [
                    ...state,
                    {
                        ...product,
                        quantity: product.quantity ? product.quantity : 1,
                        cartItemId: uuidv4(),
                    },
                ]
            } else if (
                cartItem !== undefined &&
                (cartItem.selectedProductColor !== product.selectedProductColor ||
                    cartItem.selectedProductSize !== product.selectedProductSize)
            ) {
                return [
                    ...state,
                    {
                        ...product,
                        quantity: product.quantity ? product.quantity : 1,
                        cartItemId: uuidv4(),
                    },
                ]
            } else {
                return state.map((item) =>
                    item.cartItemId === cartItem.cartItemId
                        ? {
                              ...item,
                              quantity: product.quantity
                                  ? item.quantity + product.quantity
                                  : item.quantity + 1,
                              selectedProductColor: product.selectedProductColor,
                              selectedProductSize: product.selectedProductSize,
                          }
                        : item
                )
            }
        }
    }

    if (action.type === DECREASE_QUANTITY) {
        if (product.quantity === 1) {
            const remainingItems = (state, product) =>
                state.filter((cartItem) => cartItem.cartItemId !== product.cartItemId)
            return remainingItems(state, product)
        } else {
            return state.map((item) =>
                item.cartItemId === product.cartItemId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        }
    }

    if (action.type === DELETE_FROM_CART) {
        const remainingItems = (state, product) =>
            state.filter((cartItem) => cartItem.cartItemId !== product.cartItemId)
        return remainingItems(state, product)
    }

    if (action.type === DELETE_ALL_FROM_CART) {
        return state.filter((item) => {
            return false
        })
    }

    if (action.type === SAVE_SHIPPING_ADDRESS) {
        return {
            ...state,
            shippingAddress: action.payload,
        }
    }

    return state
}

export default cartReducer
