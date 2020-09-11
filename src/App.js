import React from 'react';
import Navbar from './navBar';
import '../src/App.css'

const App = () => {
  return (
    <div className="navBar">
      <Navbar name="burger" />
      <Navbar name="pizza" />
      <Navbar name="pasta" />
      <Navbar name="ramen" />
      <Navbar name="sushi" />
    </div>
  );
}

export default App;
