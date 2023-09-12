import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0);

  const addCount = () =>{
    if(count < 20){
      count = count+1;
      setCount(count);
      console.log(count, ' add');// print value before of count before curr call od setCount() even if out of if
    }
  }
  const reduceCount = () =>{
    if(count > 0){
      setCount(count-1);
      console.log(count, ' reduce');// print value before of count before curr call od setCount() even if out of if
    }
  }

  return (
    <>
       <h2>{count}</h2>
       <button onClick={addCount}>Increase count: {count}</button>
       <br/>
       <button onClick={reduceCount}>Decrease count: {count}</button>
    </>
  )
}

export default App
