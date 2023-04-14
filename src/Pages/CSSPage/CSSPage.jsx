import React, {Component} from "react"
import './CSSPageS.scss'
import Header from "../../components/HomePage/Header/Header"
import NavBar from "../../components/HomePage/NavBar/NavBar"
import CSSBody from "../../components/CSSPage/CSSBody"

const CSSPage = () => {
    return (
        <div className='Blog'>
            <Header />
            <NavBar />
            <div className='row'>
                <CSSBody />
            </div>
        </div>
    )
}

export default CSSPage;