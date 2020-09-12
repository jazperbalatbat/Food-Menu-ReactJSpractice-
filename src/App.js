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
      <Menucard path="\images\burger\burger1.jpg" title="Classic Burger" />
      <Menucard path="" title="Breakfast Burger" />
      <Menucard path="" title="Burger Combo" />
    </div>
  );
}

export default App;
