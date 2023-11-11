import logo from './logo.svg';
import './App.css';
import Home from './home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navawal from './Navbar';
import Trends from './Trend';
import "../src/landingPages.css"
function App() {
  return (
    <div>
    <div className="MyBg">
      <Navawal/>
      <Home/>
    
    </div>
    <div className='trending'>
    <Trends/>
    </div>
    </div>

    
  );
}

export default App;
