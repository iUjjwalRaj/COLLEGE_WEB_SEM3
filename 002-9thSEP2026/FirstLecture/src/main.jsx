import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App.jsx';

// const heading = React.createElement(
//   'h1',
//   { id: 'title' },
//   'Heading No.: 1'
// );

// const MainCard =<>
// <h1>main heading</h1>
// <p>This is a paragraph.</p>
// </>

// const Footer = (
// <>
//   <ul>

//   </ul>
// </>)

// const container = React.createElement("div", { id: "container" }, [
//   React.createElement("h1", { id: "heading" }, "Heading No.: 1"),
//   React.createElement("h2", { id: "heading" }, "Heading No.: 2"),
//   React.createElement("h3", { id: "heading" }, "Heading No.: 3"),
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(container);