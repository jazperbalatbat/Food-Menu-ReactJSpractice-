import React, { useState } from 'react';
import Menucard from './menu';
import state from './object';
import '../src/App.css';

function App() {
  // let item = state.burger;
  const [item, setItem] = useState(state.burger);
  const pasta = e => {
    setItem(state.pasta);
  }
  return (
    <div>
      <button onClick={pasta}>{state.pasta[0].origin}</button>
      {item.map(item => (
        <Menucard key={item.id} title={item.title} image={item.path} />
      ))}
    </div>
  );
}

export default App;
