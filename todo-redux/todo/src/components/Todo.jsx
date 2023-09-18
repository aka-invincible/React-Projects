import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todo = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();
  return (
    <>
      <div>
        Todos
      </div>
      {todos.map(todo =>
        <p key={todo.id}>{todo.text} <button onClick={(id) => dispatch(removeTodo(todo.id))}>delete</button></p>
        )}
    </>
  )
}

export default Todo
