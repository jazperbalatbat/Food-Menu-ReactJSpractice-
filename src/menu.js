import React, { Component } from 'react';


class Menucard extends Component {
    render() {
        console.log(this.props.menu);
        return this.props.menu.map((item) => (
            <div key={item.id} style={div}>
                <img src={item.path} style={img} />
                <h1>{item.title}</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores ipsam non.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores ipsam non.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores ipsam non.
                 </p>

            </div>
        ));

    }
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