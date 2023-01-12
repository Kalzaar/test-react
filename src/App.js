import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
import SecondApp from './components/Home/Home'
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <div className='row'>
        <SideBar />
        <Home />
      </div>
      

    </div>
  );
}




export default App;
