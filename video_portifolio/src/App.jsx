import React from 'react'
import './App.css'
import Portfolio from './Portfolio'

function App() {
  return (
    <div className="App">
      {/* Global animated background layer */}
      <div className="bg-anim" aria-hidden="true" />
      <Portfolio />
    </div>
  )
}

export default App