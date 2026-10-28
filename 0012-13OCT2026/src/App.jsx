import {BrowserRouter, Router, Routes, Link} from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Service';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Link path change ke liye */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
      </div>
      <Routes>
        {/* kaun se path pe kaun sa component render hoga ye define karne ke liye */}
        <Route path="/" element={Home} />
        <Route path="/about" element={About} />
        <Route path="/service" element={Service} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;