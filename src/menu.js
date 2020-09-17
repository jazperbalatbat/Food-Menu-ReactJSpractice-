import React, { Component } from 'react';


class Menucard extends Component {
    render() {
        console.log(this.props.menu);
        return this.props.menu.map((item) => (
            <div key={item.id} className="menu__card">
                <img src={item.path} />
                <h1>{item.title}</h1>
            </div>
        ));

    }
}

// function Menucard({ path, title }) {
//     return (
//         <div className="menu-card">
//             <div className="img-card">
//                 <img src={path}></img></div>
//             <h1>{title}</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores ipsam non.
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores ipsam non.
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolores ipsam non.
//             </p>
//             <a href="">order now</a>
//         </div>
//     );
// }

export default Menucard;