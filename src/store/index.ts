import {legacy_createStore as createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage";

import Reducer from "./reducer";

const persistConfig = {
    key: "toDO-store",
    storage
}

const persistedReducer = persistReducer(persistConfig, Reducer)
export const store = createStore(persistedReducer);
export const persistor = persistStore(store)

