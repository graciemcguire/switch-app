import './App.css';
import { useState, useEffect } from 'react'


function App() {
  const [ toggle, setToggle ] = useState(false)
  const [ color, setColor ] = useState('#000')

  const handleClick = () => setColor(`#${Math.floor(Math.random()*16777215).toString(16)}`)

  useEffect(()=> {
    setColor(`#${Math.floor(Math.random()*16777215).toString(16)}`)
  }, [])

  return (
   
    <div style={{ background: color, padding: '30px'}} className="App">
      <button  onClick={ handleClick }>Click me!</button>
    </div>
  );
}

export default App;
