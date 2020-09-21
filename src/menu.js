import React from 'react';


function Menucard({ title, image }) {
    return (
        <div style={div}>
            <img src={image} style={img} />
            <h1>{title}</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores ipsam non.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores ipsam non.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores ipsam non.
            </p>
        </div>
    );
}

//css variables
const div = {
    width: '600px',
    height: '300px',
    background: 'goldenrod',
    margin: '5px',
    padding: '5px'
}
const img = {
    width: '100%',
    height: '60%',
    objectFit: 'cover'

}
export default Menucard;