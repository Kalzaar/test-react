import React, { Component } from "react";
import NavBarS from "./NavBarS.scss"
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <a href="/blog">Blog</a>
            <a href="/css">CSS Apps</a>
            <Link to="/contact">Contact Me</Link>
        </div>
    )
}

// class NavBar extends Component {
//     render() {
//         return (
//             <div className="navbar">
//                 <Link to="/">Home</Link>
//                 <a href="#">Demo</a>
//                 <a href="#">Demo</a>
//                 <Link to="/contact">Contact Me</Link>
//             </div>
//         )
//     }
// }

export default NavBar