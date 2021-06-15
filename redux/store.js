import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2"
import rootReducer from "./reducers/rootReducer"

const persistConfig = {
    key: "root",
    storage: storage,
    stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const createdStore = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)))

export const initializeStore = (initialState = {}) => {
    return createdStore
}
export const persistor = persistStore(createdStore)
