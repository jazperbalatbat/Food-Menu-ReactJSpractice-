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
      <div className="body" >
        <a href="" className="scroll" alt="scroll" title="scroll"><span>&#x2B0D;</span></a>
        <div className="navBar">
          <button className="navBtn">burger</button >
          <button className="navBtn">pizza</button >
          <button className="navBtn">pasta</button >
          <button className="navBtn">ramen</button >
          <button className="navBtn">sushi</button >
        </div>
        <div className="menuCard">
          <Menucard path={this.state.burger[0].path} title={this.state.burger[0].title} />
          <Menucard path={this.state.burger[1].path} title={this.state.burger[1].title} />
          <Menucard path={this.state.burger[2].path} title={this.state.burger[2].title} />
          {/* <Menucard path="/images/pasta/pasta1.jpg" title="White Pasta" />
        <Menucard path="/images/pasta/pasta1.jpg" title="Tomato Pasta" />
        <Menucard path="/images/pasta/pasta1.jpg" title="Bean Pasta" />
        <Menucard path="/images/pizza/pizza1.jpg" title="Pepperoni Pizza" />
        <Menucard path="/images/pizza/pizza1.jpg" title="Organic Pizza" />
        <Menucard path="/images/pizza/pizza1.jpg" title="Olive pizza" />
        <Menucard path="/images/ramen/ramen1.jpg" title="CharSiu Ramen" />
        <Menucard path="/images/ramen/ramen1.jpg" title="Thai Ramen" />
        <Menucard path="/images/ramen/ramen1.jpg" title="Sho Ramen" />
        <Menucard path="/images/sushi/sushi1.jpg" title="Assorted Sushi" />
        <Menucard path="/images/sushi/sushi1.jpg" title="Cabbage Siumai" />
        <Menucard path="/images/sushi/sushi1.jpg" title="Salmon Sushi" /> */}

        </div>
      </div >
    );
  }
}

export default App;
