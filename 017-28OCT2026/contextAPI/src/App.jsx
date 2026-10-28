import React from 'react'
import NavBar from './components/NavBar'
import A from './components/A'


export const tsundere = createContext();

function App() {
    const name = "Alya";
    const age = 25;

    const cutie = "Ronova";
    const cutieAge = 800;

  return (
      
      <tsundere.Provider value={{ cutie, cutieAge }}>
        <div>
          <NavBar />
          <h1 className="text-2xl font-bold mb-4">App Component</h1>
          <A name={name} age={age} />
        </div>
      </tsundere.Provider>
  )
}

export default App