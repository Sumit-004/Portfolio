import React, { useEffect } from 'react'
import Header from './components/Header'
import About from "./components/About";
import Menu from './components/Menu'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    Aos.init();
  }, [])

  
  return (
    <div>
      <Header/>
      <Menu/>
      <About/>
      <Skills />
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
