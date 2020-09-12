import React from 'react';

function Menucard({ path, title }) {
    return (
        <div className="menu-card">
            <div className="img-card">
                <img src={path}></img></div>
            <h1>{title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores ipsam non.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores ipsam non.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores ipsam non.
            </p>
            <a href="">order now</a>
        </div>
    );
}

export default Menucard;