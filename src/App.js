import React, { useState } from 'react';
import Menucard from './menu';
import state from './object';
import '../src/App.css';

function App() {
  const [item, setItem] = useState(state.burger);
  const burger = e => {
    setItem(state.burger);
  }
  const pasta = e => {
    setItem(state.pasta);
  }
  const pizza = e => {
    setItem(state.pizza);
  }
  const ramen = e => {
    setItem(state.ramen);
  }
  const sushi = e => {
    setItem(state.sushi);
  }
  return (
    <div>
      <div className="nav">
        <ul>
          <li onClick={burger}>{state.burger[0].origin}</li>
          <li onClick={pasta}>{state.pasta[0].origin}</li>
          <li onClick={pizza}>{state.pizza[0].origin}</li>
          <li onClick={ramen}>{state.ramen[0].origin}</li>
          <li onClick={sushi}>{state.sushi[0].origin}</li>
        </ul>
      </div>
      <div>
        {item.map(item => (
          <Menucard key={item.id} title={item.title} image={item.path} />
        ))}
      </div>
    </div>
  );
}

export default App;
