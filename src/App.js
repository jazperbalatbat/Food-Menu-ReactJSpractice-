import React from 'react';
import Navbar from './navBar';
import Menucard from './menu';
import '../src/App.css'

const App = () => {
  return (
    <div className="body">
      <a href="" className="scroll" alt="scroll" title="scroll"><span>&#x2B0D;</span></a>
      <div className="navBar">
        <Navbar name="burger" />
        <Navbar name="pizza" />
        <Navbar name="pasta" />
        <Navbar name="ramen" />
        <Navbar name="sushi" />
      </div>
    </div>
  );
}

export default App;
