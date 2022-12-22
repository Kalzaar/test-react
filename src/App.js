import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <h1>Testing home components</h1>

      <Home testProp='Trevor' />
    </div>
  );
}

export default App;
