import './App.css';
import { useState, useEffect } from 'react'

function useColor(toggle = false) {
  const [ color, setColor ] = useState('#000')

  const setInput = (setter) => (event) =>  {
    setter(event.currentTarget.value)
  }

  useEffect(()=> {
    // if (toggle) {
    //   setColor('#000')
    // } else {
    //   setColor(`#${Math.floor(Math.random()*16777215).toString(16)}`)
    // }

    setColor(`#${Math.floor(Math.random()*16777215).toString(16)}`)
  }, [toggle])

  return color;
}

function App() {
  const [ toggle, setToggle ] = useState(false)
  const color = useColor(toggle);
  
  const handleClick = () => setToggle(prevState => !prevState)

  return (
   
    <div style={{ background: color, padding: '30px'}} className="App">
      <button  onClick={ handleClick }>Click me!</button>
    </div>
  );
}

export default App;
