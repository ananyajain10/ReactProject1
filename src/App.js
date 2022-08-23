import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero'
import Card from './Components/Card'
import kety from './image/kety.jpg'
function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <Hero/> */}
     <Card
     img={kety}
     rating="5.0"
     reviewCount= "(6)"
     country="USA"
     title ="Life Lessons with Katie Zaferes"
     price ="136"
     /> 
    </div>
  );
}


export default App;
