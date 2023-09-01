import './App.css'

// bootstrap

import { Container, Col, Row } from 'react-bootstrap'

// Router

import { Routes, Route } from 'react-router-dom'

// components


import Header from './components/header/header'
import Video from './UI/video'
import AboutUs from './components/pages/jsx/aboutUs'
import Services from './components/pages/jsx/services'
import Rental from './components/pages/jsx/rental'
import Team from './components/pages/jsx/team'
import Footer from './components/footer/footer'






const App = () => {


  return(
    <div className="App">
      <Container>

          <Header></Header>
          <Video></Video>
          <AboutUs></AboutUs>
          <Services></Services>
          <Rental></Rental>
          <Team></Team>
          <Footer></Footer>


      </Container>



    </div>
  )
}

export default App