import React from 'react';

function Menucard({ path, title, info }) {
    return (
        <div className="menu-card">
            <div className="img-card">
                <img src={path}></img></div>
            <h1>{title}</h1>
            <p>{info}</p>
            <a href="">order now</a>
        </div>
    );
}

export default Menucard;