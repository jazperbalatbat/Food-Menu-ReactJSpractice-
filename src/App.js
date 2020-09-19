import React from 'react';
import Menucard from './menu';
import state from './object';
import '../src/App.css';

function App() {
  let x = state.pasta;
  const burgerBtn = e => {
    x = state.burger;
    alert(x);
  }
  return (
    <div>
      <button onClick={burgerBtn}>{state.burger[0].origin}</button>
      {x.map(item => (
        <Menucard key={item.id} title={item.title} image={item.path} />
      ))}
    </div>
  );
}

export default App;
