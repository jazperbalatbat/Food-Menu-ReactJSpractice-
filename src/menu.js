import React from 'react';

import '../src/App.css';

function Menucard({ title, image }) {
    return (
        <div className="menu_item">
            <img src={image} />
            <h1>{title}</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores ipsam non.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores ipsam non.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores ipsam non.
            </p>
        </div>
    );
}

export default Menucard;