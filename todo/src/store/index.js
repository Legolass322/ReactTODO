import todoReducer from "./todoReducer"
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
        todo: todoReducer
    }
})

