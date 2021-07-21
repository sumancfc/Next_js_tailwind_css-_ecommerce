import { SET_SEARCH } from "../constants/globalConstants"

export const setGlobalSearch = (keyword) => ({
    type: SET_SEARCH,
    keyword,
})
