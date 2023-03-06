import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import todoReducer from "./todo";

export const store = configureStore({reducer: 
    combineReducers({todos: todoReducer}),
    middleware: [thunk]
})

