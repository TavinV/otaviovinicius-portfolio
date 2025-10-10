import { useState } from 'react'

import Header from './components/ui/Header'
import Background from './components/layout/Background'
import MyPicture from './components/ui/MyPicutre'
import Section from './components/layout/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Header />
      <Background />
      <MyPicture />
      <Section>

        <h1 className='text-amber-400'>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </Section>
      </>
    
  )
}

export default App
