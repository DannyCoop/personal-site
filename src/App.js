import Navbar from './Navbar/Navbar'
import About from './About/About'
import './App.css';
import SectionOne from './SectionOne/SectionOne';

function App() {
  return (
    <div className="App">
        <Navbar/><br/>
        <h2>Welcome to Coop's place</h2><br/>
        <SectionOne/>
    </div>
  );
}

export default App;
