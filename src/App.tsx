import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import sky from './images/sky.png';


import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <Parallax pages={4}>
          <ParallaxLayer 
            offset={0}
            speed={1}
            factor={2}
            style={{
              backgroundImage: `url(${sky})`,
              backgroundSize: 'cover',
            }}
          >
            <h2>Steven Long Nguyen</h2>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.5}>
            <h2>Software Engineer</h2>
          </ParallaxLayer>

        </Parallax>
      </div>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Steven Long Nguyen</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
