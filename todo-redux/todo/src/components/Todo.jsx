import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todo = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <span className="font-bold text-3xl">Todos</span>
      </div>
      {todos.map((todo) => (
        <p key={todo.id} className="flex mx-10 px-7 items-center justify-between border border-gray-300 rounded-lg p-2 mb-2">
          <span className="text-gray-800"><i>{todo.text}</i></span>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-2 py-1 rounded-md focus:outline-none"
          >
            Delete
          </button>
        </p>
      ))}

    </>
  )
}

export default Todo
