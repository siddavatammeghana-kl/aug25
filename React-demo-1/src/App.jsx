import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const name ="Poojitha";
  const sub = "Kandukuri"

  return(
    <>
    <div>
        <header><h1> jsx is HTML like syntax inside javascript</h1></header>
        </div>
        <div>
        <p> JSx is syntactic sugar </p>
        <div> <br />
        <h1> Hello</h1> <p>world</p>
        </div>
        <div className='hero'>HI</div>
      </div>
      <div>
        
        <h1> Heartly Welcome {name}</h1>
        
      </div>
      <div>
        <button>INPUT</button>
      </div>
      <div>
        <iframe> BORDER frame</iframe>
      </div>
  
      <div>
       <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 5000002121121)}
        >
          Count is {count}
        </button>
     </div>
    </>
  )
} export default App