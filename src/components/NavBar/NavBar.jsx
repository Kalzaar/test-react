import React, { Component } from "react";
import NavBarS from "./NavBarS.scss"

class NavBar extends Component {
    render() {
        return (
            <div className="navbar">
                <a href="#">Home</a>
                <a href="#">Demo</a>
                <a href="#">Demo</a>
                <a href="#" className="right">Contact Me</a>
            </div>
        )
    }
}

export default NavBar