import NavBar from './components/NavBar'
import A from './components/A'
import { tsundere } from './context'
// import { angryDevesh } from './context'

function App() {
    const name = "Alya";
    const age = 25;

    const cutie = "Ronova"
    const cutieAge = "more than 6000 years old"
    

  return (
    <main className="bg-gray-100 min-h-screen p-8">
      <tsundere.Provider value={{ cutie, cutieAge }}>
        <div>
          <NavBar />
          <h1 className="text-2xl font-bold mb-4">App Component</h1>
          <A name={name} age={age} />
        </div>
      </tsundere.Provider>

    </main>
  )
}

export default App