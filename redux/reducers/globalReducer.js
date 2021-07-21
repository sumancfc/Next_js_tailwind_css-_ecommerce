import { SET_SEARCH } from "../constants/globalConstants"

const initialState = {
    keyword: "",
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH:
            return {
                ...state,
                keyword: action.key,
            }

        default:
            return state
    }
}

export default globalReducer
