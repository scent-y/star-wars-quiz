import { configureStore } from "@reduxjs/toolkit";
import { resultReducer } from "./result"

export const store = configureStore({
    reducer: {
        result: resultReducer
    }
})
