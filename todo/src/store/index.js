import todoReducer from "./todoReducer"
import { configureStore } from '@reduxjs/toolkit'
import { todoMiddleware } from "../middlewares/todoMiddleware"

export default configureStore({
    reducer: {
        todo: todoReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todoMiddleware)
})