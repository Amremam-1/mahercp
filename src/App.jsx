import React, { useEffect } from "react"
import Header from "./components/Header"
import Aos from "aos"
import HeroSection from "./components/HeroSection"
import Services from "./components/Services"
import PartnersSlider from "./components/PartnersSlider"
import Projects from "./components/Projects"
import Details from "./components/Details"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <main>
      <Header />
      <HeroSection />
      <Services />
      <PartnersSlider />
      <Projects />
      <Details />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
