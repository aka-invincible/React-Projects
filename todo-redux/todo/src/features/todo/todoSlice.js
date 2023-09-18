import { createSlice, nanoid } from "@reduxjs/toolkit"

// initialises the initial state
const initialState = {
    todos: [{ id: 1, text: "Hello" }]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodos: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo);
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload
            })
        },
    }
})

// for dispatch
export const { addTodos, removeTodo } = todoSlice.actions

// as it needs to be wired to the stores
export default todoSlice.reducer;