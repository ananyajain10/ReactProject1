import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero'
import Card from './Components/Card'
import Data from './Components/data'
function App() {
  const write = Data.map(name=>
    {
      return <Card 
      key={name.id}
      img={name.coverImg}
      rating={name.stats.rating}
      reviewCount={name.stats.reviewCount}
      location={name.location}
      title={name.title}
      price={name.price}/>
    })
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <section className="cards-list">
                {write}
      </section>
  
    </div>
  );
}


export default App;
