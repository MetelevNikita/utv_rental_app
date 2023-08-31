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





const App = () => {


  return(
    <div className="App">
      <Container>
          <Header></Header>
          <Video></Video>
          <AboutUs></AboutUs>
          <Services></Services>


      </Container>



    </div>
  )
}

export default App