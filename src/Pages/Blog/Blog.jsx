import React, {Component} from "react"
import './BlogS.scss'
import Header from "../../components/HomePage/Header/Header"
import NavBar from "../../components/HomePage/NavBar/NavBar"
import BlogBody from "../../components/BlogPage/Body/BlogBody"
import BlogNav from "../../components/BlogPage/BlogNav/BlogNav"


const Blog = () => {
    return (
        <div className='Blog'>
            <Header />
            <NavBar />
            <div className='row'>
                <BlogNav />
                <BlogBody />
            </div>
        </div>
    )
}

export default Blog;