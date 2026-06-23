import './App.css'

// bootstrap

import { Container } from 'react-bootstrap'

// Router

import { Routes, Route } from 'react-router-dom'

// components

import OpenPage from './components/pages/jsx/openPage'

//

import Header from './components/header/header'
import Video from './UI/video'
import AboutUs from './components/pages/jsx/aboutUs'
import Production from './components/pages/jsx/production'
import Services from './components/pages/jsx/services'
import Rental from './components/pages/jsx/rental'
import Team from './components/pages/jsx/team'
import Footer from './components/footer/footer'
import ServiceCardOpen from './components/pages/jsx/service_card_open'

//


import RentalCardOpen from './components/pages/jsx/rental-card-open'
import PackCardOpen from './components/pages/jsx/pack-card-open'
import Trash from './components/pages/jsx/trash'

// Modal

import ModalCreate from './modals/jsx/modal_create'
import ModalSubmit from './modals/jsx/modal_submit'
import ModalRental from './modals/jsx/modal_rental'
import ModalRentalSubmit from './modals/jsx/modal_rental_submit'

//

import { useEffect, useState } from 'react'

// redux

import { store } from './store/store'
import { Provider } from 'react-redux'


// animation

import { animated, useSpring } from '@react-spring/web'



const App = () => {

  const [counterTrash, setCounterTrash] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [serviceCardModal, setServiceCardModal] = useState(false)
  const [idCard, setIdCard] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }, [])




  // animation spring


  const [modalOpen, api] = useSpring(() => ({
    from: {opacity: 0,transform: 'scale(0)'}
  }))

  const [modalRentalOpen, apiRental] = useSpring(() => ({
    from: {opacity: 0,transform: 'scale(0)'}
  }))


  const [modalSubmitRentalOpen, apiSubmitRental] = useSpring(() => ({
    from: {opacity: 0,transform: 'scale(0)'}
  }))


  const [modalSubmit, apiSubmit] = useSpring(() => ({
    from: { opacity: 0, transform:'scale(0)' },
  }))


  //

  if (isLoading) {
    return (
      <Container>
        <OpenPage></OpenPage>
      </Container>
    )
  }


  return(

    <Provider store={store}>
      <Container fluid>

            <div className="App">

                    <Header trash={{counterTrash, setCounterTrash}}></Header>
                    <Video modalAnimation={{modalOpen, api}}></Video>

              <Routes>
                <Route path='/' element={
                    <div style={{marginTop: '100px'}}>
                    <AboutUs></AboutUs>
                    <Production modalRentalSubmitAnimation={{modalSubmitRentalOpen, apiSubmitRental}}></Production>
                    <Rental trash={{counterTrash, setCounterTrash}} modalRentalAnimation={{modalRentalOpen, apiRental}} modalRentalSubmitAnimation={{modalSubmitRentalOpen, apiSubmitRental}}></Rental>
                    <Services serviceCardModalOpen={{serviceCardModal, setServiceCardModal}} idCardModel={{idCard, setIdCard}}></Services>
                    {/* <Team></Team> */}

                    </div>
                  }>
                  </Route>

                  <Route path='/rental/:id' element={<RentalCardOpen trash={{counterTrash, setCounterTrash}} modalRentalSubmitAnimation={{modalSubmitRentalOpen, apiSubmitRental}} modalAnimation={{modalOpen, api}}/>}></Route>
                  <Route path='/pack/:id' element={<PackCardOpen trash={{counterTrash, setCounterTrash}} modalRentalSubmitAnimation={{modalSubmitRentalOpen, apiSubmitRental}} modalAnimation={{modalOpen, api}}/>} ></Route>
                  <Route path='/trash' element={<Trash counter={{counterTrash, setCounterTrash}} modalRentalAnimation={{modalRentalOpen, apiRental}}></Trash>}></Route>
                  <Route path={`/service/:id`} element={<ServiceCardOpen />}></Route>
              </Routes>


                    <Footer modalSubmitAnimation={{modalSubmit, apiSubmit}}></Footer>


                {/* modals */}

                <animated.div style={{position: 'fixed' , top:'0', left:'0', width: '100%', height: '100%',  transform: "translate(-50%, -50%)", ...modalOpen}}><ModalCreate modalAnimation={{modalOpen, api}} modalSubmitAnimation={{modalSubmit, apiSubmit}}></ModalCreate></animated.div>
                <animated.div style={{position: 'fixed' , top:'0', left:'0', width: '100%', height: '100%',  transform: "translate(-50%, -50%)", ...modalRentalOpen}}><ModalRental trash={{counterTrash, setCounterTrash}} modalRentalAnimation={{modalRentalOpen, apiRental}} modalSubmitAnimation={{modalSubmit, apiSubmit}}></ModalRental ></animated.div>
                <animated.div style={{position: 'fixed' , top:'0', left:'0', width: '100%', height: '100%',  transform: "translate(-50%, -50%)", ...modalSubmit}}><ModalSubmit modalSubmitAnimation={{modalSubmit, apiSubmit}}></ModalSubmit></animated.div>
                <animated.div style={{position: 'fixed' , top:'0', left:'0', width: '100%', height: '100%',  transform: "translate(-50%, -50%)", ...modalSubmitRentalOpen}}><ModalRentalSubmit modalRentalSubmitAnimation={{modalSubmitRentalOpen, apiSubmitRental}}></ModalRentalSubmit></animated.div>


                </div>


      </Container>
    </Provider>

  )
}

export default App