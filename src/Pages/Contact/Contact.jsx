import React, {Component} from "react"
import './ContactS.scss'
import Header from "../../components/HomePage/Header/Header"
import NavBar from "../../components/HomePage/NavBar/NavBar"


const Contact = () => {
    return (
        <div className='Contact'>
            <Header />
            <NavBar />
            <div className='row'>
                <h1>This is my Contact Page!</h1>
            </div>
        </div>
    )
}

export default Contact;
