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
      <form onSubmit={addTodoHandler} className="mb-4 my-10">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a Todo..."
          className="border border-gray-400 rounded-lg px-4 py-2 w-64 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg ml-2"
        >
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo
