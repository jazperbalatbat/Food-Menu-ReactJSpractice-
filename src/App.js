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
  //searchbar text input
  const [sbtext, setSbtext] = useState('');
  const sbtextOC = e => {
    setSbtext(e.target.value);
  }
  //searchbar submit
  const sbbtnOC = e => {
    e.preventDefault();
    switch (sbtext) {
      case 'pasta':
        setItem(state[sbtext]);
        setSbtext('');
        break;
      case 'pizza':
        setItem(state[sbtext]);
        setSbtext('');
        break;
      case 'burger':
        setItem(state[sbtext]);
        setSbtext('');
        break;
      case 'ramen':
        setItem(state[sbtext]);
        setSbtext('');
        break;
      case 'sushi':
        setItem(state[sbtext]);
        setSbtext('');
        break;
      default:
        alert('error');
        setSbtext('');
        break;
    }

  }
  return (
    <div className="body">
      <div className="nav">
        <ul>
          <li onClick={burger}>{state.burger[0].origin}</li>
          <li onClick={pasta}>{state.pasta[0].origin}</li>
          <li onClick={pizza}>{state.pizza[0].origin}</li>
          <li onClick={ramen}>{state.ramen[0].origin}</li>
          <li onClick={sushi}>{state.sushi[0].origin}</li>
        </ul>
        <form action="" className="searchbar" onSubmit={sbbtnOC}>
          <input type="text" className="sb_text" onChange={sbtextOC} value={sbtext} />
          <input type="submit" value="SEARCH" className="sb_btn" />
        </form>
      </div>
      <div className="menu">
        {item.map(item => (
          <Menucard key={item.title} title={item.title} image={item.path} />
        ))}
      </div>
    </div>
  );
}

export default App;
