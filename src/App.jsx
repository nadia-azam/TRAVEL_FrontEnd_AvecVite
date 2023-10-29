import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Middle from './Components/Middle/Middle'
import Destinations from './Components/Destinations/Destinations'
import Portifolio from './Components/Portifolio/Portifolio'
import Reviews from './Components/Reviews/Reviews'
import Questions from './Components/Questions/Questions'
import Subscribe from './Components/Subscribe/Subscribe'
import Footer from './Components/Footer/Footer'

function App() {
  

  return (
    <div>
      <Navbar/>
      <Home />
      <Middle/>
      <Destinations/>
      <Portifolio/>
      <Reviews/>
      <Questions/>
      <Subscribe/>
      <Footer/>

    </div>
  )
}

export default App
