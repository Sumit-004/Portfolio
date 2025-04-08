import React from 'react'
import Header from './components/Header'
import About from "./components/About";
import Menu from './components/Menu'
import Skills from './components/Skills'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Menu/>
      <About/>
      <Skills />
      <Footer/>
    </div>
  )
}

export default App
