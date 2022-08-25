import { createSlice } from '@reduxjs/toolkit'

const currentListStr = localStorage.getItem('currentList')
const currentList = currentListStr ? JSON.parse(currentListStr) : []


export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        currentList: currentList
    },
    reducers: {
        addTodo: (state, action) => {
            state.currentList = [...state.currentList, action.payload]
        },
        removeTodo: (state, action) => {
            state.currentList = state.currentList.filter(t => t.id !== action.payload)
        }
    },
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer