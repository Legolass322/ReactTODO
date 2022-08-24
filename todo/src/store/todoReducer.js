import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        currentList: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.currentList = [...state.currentList, action.payload]
        },
        removeTodo: (state, action) => {
            state.currentList = state.currentList.filter(t => t.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer