import React from 'react';
import './App.css';
import Block from './Block.jsx';
import Card from './Card.jsx';

function App() {
  return (
    <>
      {/* <style>
        {`h1 {
          color: blue;
        }`}
      </style> */}
      <div>
        <h1>Hello, Vite!</h1>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Block/>
        <Card/>
      </div>

      
    </>
    
  );
}

export default App;