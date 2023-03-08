import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import todoReducer from "./todo";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
    key: "state",
    storage,
    version: 1,
    whitelist: ["todos"]
}
const reducers = combineReducers({todos: todoReducer, middleware: [thunk]})
const persisterReducer = persistReducer(persistConfig, reducers)
export const store = configureStore({reducer: persisterReducer})
