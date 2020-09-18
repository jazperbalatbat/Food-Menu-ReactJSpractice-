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
    ],
    pasta: [
      {
        id: 1,
        title: 'White Pasta',
        path: '/images/pasta/pasta1.jpg'
      },
      {
        id: 2,
        title: 'Tomato Pasta',
        path: '/images/pasta/pasta1.jpg'
      },
      {
        id: 3,
        title: 'Bean Pasta',
        path: '/images/pasta/pasta1.jpg'
      }
    ]
  }
  pastas = () => {
    this.menus(this.state.pasta);
  }
  menus = (x) => {
    if (!x) {
      return this.state.burger;
    }
    else {
      return x;
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.pastas()}>click</button>
        <Menucard className="sample" menu={this.menus()} />
      </div>
    );
  }
}

export default App;
