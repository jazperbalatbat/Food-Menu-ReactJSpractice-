import React, { Component } from 'react';
import Menucard from './menu';
import '../src/App.css'
let mc = document.querySelectorAll(".burger");

class App extends Component {
  state = {
    burger: [
      {
        id: 1,
        title: 'Classic Burger',
        path: '/images/burger/burger1.jpg'
      },
      {
        id: 2,
        title: 'Breakfast Burger',
        path: '/images/burger/burger1.jpg'
      },
      {
        id: 3,
        title: 'Burger Combo',
        path: '/images/burger/burger1.jpg'
      }
    ]
  }
  render() {
    return (
      <Menucard className="sample" menu={this.state.burger} />
    );
  }
}

export default App;
