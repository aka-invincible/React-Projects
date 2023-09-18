import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodos } from '../features/todo/todoSlice'

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) =>{
        e.preventDefault();
        dispatch(addTodos(input));
        setInput('')
    }
  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter a Todo...' />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
