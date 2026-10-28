import React from 'react';
import './Block.css';
import CardBlock from './CardBlock.jsx';



function Block() {
  return (
      <div className="block">
        <h1>This is a Block</h1>
        <CardBlock/>
      </div>
  );
}

export default Block;