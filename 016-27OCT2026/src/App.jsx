import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import DataBase from './pages/DataBase'
import Travel from './pages/Travel'

function App() {
  return (
    <Router>
  <div className="min-h-screen flex flex-col bg-slate-100 font-bold text-slate-800 text-center">
    <NavBar />

    <main className="flex-1 flex items-center justify-center">
      <section>
        <h1 className="text-2xl mb-4">Welcome to My Website</h1>
        <p className="mb-4">
          This is a simple React application with routing and Tailwind CSS styling.
        </p>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/database" element={<DataBase />} /> */}
          <Route path="/database" element={<DataBase />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </section>
    </main>

    <Footer />
  </div>
</Router>
  )
}

export default App