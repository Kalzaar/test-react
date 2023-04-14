import React, {Component} from "react"
import './HomePageS.scss'
import Header from "../components/HomePage/Header/Header"
import NavBar from "../components/HomePage/NavBar/NavBar"
import SideBar from "../components/HomePage/SideBar/SideBar"
import Body from "../components/HomePage/Body/Body"

const HomePage = () => {
    return (
        <div className='HomePage'>
            <Header />
            <NavBar />
            <Body />
            {/* <div className='row'>
                <SideBar />
                <Body />
            </div> */}
        </div>
    )
}

export default HomePage;

// How to do it via class based react components
// class HomePage extends Component {
//     render() {
//         return (
//             <div>
//                 <Header />
//                 <NavBar />
//                 <div className='row'>
//                     <SideBar />
//                     <Body />
//                 </div>
//             </div>
//         )
//     }
// }