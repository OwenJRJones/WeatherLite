import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import WeatherSection from './components/WeatherSection/WeatherSection'
import './App.css'
import './weather-icons.min.css'
import { sunny_bg, rain_bg, sunset_bg } from './assets'

const imgs = [
  sunny_bg,
  rain_bg,
  sunset_bg,
]

function App() { 
  const random = Math.floor(Math.random() * imgs.length)
  
  window.onload = function() {
    let root = document.getElementById("body");  
    root.style.backgroundImage = `url(${imgs[random]})`
  }

  return (
    <>
      <Header />
      <WeatherSection />
      <Footer />
    </>
  )
}

export default App
