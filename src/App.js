import React from 'react';
import Menucard from './menu';
import '../src/App.css'
let mc = document.querySelectorAll(".burger");
const App = () => {
  return (
    <div className="body">
      <a href="" className="scroll" alt="scroll" title="scroll"><span>&#x2B0D;</span></a>
      <div className="navBar">
        <button className="navBtn">burger</button >
        <button className="navBtn">pizza</button >
        <button className="navBtn">pasta</button >
        <button className="navBtn">ramen</button >
        <button className="navBtn">sushi</button >
      </div>
      <div className="menuCard">
        <Menucard path="/images/burger/burger1.jpg" title="Classic Burger" />
        <Menucard path="/images/burger/burger1.jpg" title="Breakfast Burger" />
        <Menucard path="/images/burger/burger1.jpg" title="Burger Combo" />
        <Menucard path="/images/pasta/pasta1.jpg" title="White Pasta" />
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
        <Menucard path="/images/sushi/sushi1.jpg" title="Salmon Sushi" />
        {/* sample */}

        <Menucard path="/images/burger/burger1.jpg" title="Classic Burger" />
        <Menucard path="/images/burger/burger1.jpg" title="Breakfast Burger" />
        <Menucard path="/images/burger/burger1.jpg" title="Burger Combo" />
        <Menucard path="/images/pasta/pasta1.jpg" title="White Pasta" />
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
        <Menucard path="/images/sushi/sushi1.jpg" title="Salmon Sushi" />
        <Menucard path="/images/burger/burger1.jpg" title="Classic Burger" />
        <Menucard path="/images/burger/burger1.jpg" title="Breakfast Burger" />
        <Menucard path="/images/burger/burger1.jpg" title="Burger Combo" />
        <Menucard path="/images/pasta/pasta1.jpg" title="White Pasta" />
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
        <Menucard path="/images/sushi/sushi1.jpg" title="Salmon Sushi" />

      </div>
    </div>
  );
}

export default App;
