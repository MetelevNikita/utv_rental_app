import './App.css'

// bootstrap

import { Container } from 'react-bootstrap'

// Router

import { Routes, Route } from 'react-router-dom'

// components

import Preloader from './components/pages/jsx/preloader'
import Header from './components/header/header'
import Video from './UI/video'
import AboutUs from './components/pages/jsx/aboutUs'
import Services from './components/pages/jsx/services'
import Rental from './components/pages/jsx/rental'
import Team from './components/pages/jsx/team'
import Footer from './components/footer/footer'

//


import RentalCardOpen from './components/pages/jsx/rental-card-open'
import Trash from './components/pages/jsx/trash'

// Modal

import ModalCreate from './modals/jsx/modal_create'
import ModalSubmit from './modals/jsx/modal_submit'
import ModalRental from './modals/jsx/modal_rental'

//

import { useEffect, useState } from 'react'

// redux

import { rentalStore } from './store/rental-store'
import { Provider } from 'react-redux'
import ModalRentalSubmit from './modals/jsx/modal_rental_submit'






const App = () => {

  const [modalCreate, setModalCreate] = useState(false)
  const [modalRental, setModalRental] = useState(false)
  const [modalSubmit, setModalSubmit] = useState(false)
  const [modalRentalSubmit, setModalRentalSubmit] = useState(false)
  const [counterTrash, setCounterTrash] = useState(0)


  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])



  return(

    <Provider store={rentalStore}>

      <Container>

        {

          isLoading ? <Preloader></Preloader> :

            <div className="App">

                    <Header trash={{counterTrash, setCounterTrash}}></Header>
                    <Video modalCreateOpen={{modalCreate, setModalCreate}}></Video>

              <Routes>
                <Route path='/' element={<>
                    <AboutUs></AboutUs>
                    <Services></Services>
                    <Rental modalRentalSubmitOpen={{modalRentalSubmit, setModalRentalSubmit}} modalRentalOpen={{modalRental, setModalRental}} trash={{counterTrash, setCounterTrash}}></Rental>
                    <Team></Team>
                    </>}>
                  </Route>

                  <Route path='/rental/:id' element={<RentalCardOpen trash={{counterTrash, setCounterTrash}} modalRentalOpen={{modalRental, setModalRental}}/>}></Route>
                  <Route path='/trash' element={<Trash counter={{counterTrash, setCounterTrash}} modalCreateOpen={{modalRental, setModalRental}}></Trash>}></Route>
              </Routes>


                    <Footer></Footer>


                {(modalCreate !== false) ? <ModalCreate modalSubmitOpen={{modalSubmit, setModalSubmit}} modalCreateOpen={{modalCreate, setModalCreate}}/> : <></>}
                {(modalRental !== false) ? <ModalRental trash={{counterTrash, setCounterTrash}} modalRentalOpen={{modalRental, setModalRental}}></ModalRental> : <></>}
                {(modalSubmit !== false) ? <ModalSubmit modalSubmitOpen={{modalSubmit, setModalSubmit}}></ModalSubmit> : <></>}
                {(modalRentalSubmit !== false) ? <ModalRentalSubmit modalRentalSubmitClose={{modalRentalSubmit, setModalRentalSubmit}}></ModalRentalSubmit> : <></>}

                </div>

        }
      </Container>



    </Provider>

  )
}

export default App