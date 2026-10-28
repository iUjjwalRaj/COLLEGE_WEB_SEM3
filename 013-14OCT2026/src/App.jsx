import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router';
import './App.css';
import logo from './assets/logo.webp';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Service';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div className={`app-shell${isDarkMode ? ' dark-mode' : ''}`}>
        <header className="site-header">
          <Link className="brand" to="/">
            <img className="brand-mark" src={logo} alt="" aria-hidden="true" />
            <span>ronova<span className="brand-dot">.</span></span>
          </Link>
          <nav className="site-nav" aria-label="Main navigation">
            <Link to="/">Home</Link>
            <Link to="/about">Her story</Link>
            <Link to="/service">Cute things</Link>
          </nav>
          <div className="header-actions">
            <span className="header-badge">✿ Teyvat's lovely shade</span>
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setIsDarkMode((current) => !current)}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={isDarkMode}
            >
              <span aria-hidden="true">{isDarkMode ? '☼' : '☾'}</span>
              {isDarkMode ? 'Light' : 'Dark'}
            </button>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
        </Routes>
        <footer className="site-footer">
          <span>made with stardust & soft feelings</span>
          <span>♡ a fan-made tribute to Ronova</span>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;