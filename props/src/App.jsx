
import './App.css'
import Card from './Card'

function App() {
  // const [count, setCount] = useState(0)
  const myArr = [1,2,3,4];

  return (
    <>
        <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>Tailwind CSS</h1>
        <Card name='Akash' myArr={myArr} urArr = {[1,2,3,4]} myObj= { {name : 'Ram', age : 14} }/>
        <Card/>
    </>
  )
}

export default App
