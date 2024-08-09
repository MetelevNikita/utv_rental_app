import React from 'react'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'

//

import { Col, Container } from 'react-bootstrap'

// redux

import { useSelector, useDispatch } from 'react-redux'
import { getPortfolioAsync } from '../store/portfolioSlice'

//



const ServiceCardOpen = ({ serviceCardModalOpen, idCardModel }) => {

  const { serviceCardModal, setServiceCardModal } = serviceCardModalOpen
  const {idCard, setIdCard} = idCardModel
  const dispatch = useDispatch()

  useEffect(() => {dispatch(getPortfolioAsync())}, [dispatch])


  const portFolioSelector = useSelector(state => state.portfolio.portfolio)
  const checkedCard = portFolioSelector.find(card => card.id === idCard)




  return (

    <Container>


    <Col style={{width: "100%", height:  "100%", backdropFilter: 'blur(6px)', position: 'fixed', top: '0px', left: '0px'}}>

      <Col lg={6} md={6} sm={12} xs={12} style={{height: 'max-content', backgroundColor: 'black', borderRadius: '25px', padding: '40px', position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -60%)'}}>


        <Col style={{width: '100%'}} className='d-flex jus mb-5'><ReactPlayer controls={true} width={'100%'} maxHeight={'600px'} url={checkedCard.link}></ReactPlayer></Col>


          <Col className='d-flex align-items-center mb-3'>

            <Col className='d-flex justify-content-start' style={{width: '100%', height: 'max-content', fontSize: 'calc(1em + 0.4vw)', fontWeight: '400', textTransform: 'uppercase', lineHeight: '110%'}}>{checkedCard.title}</Col>
            <Col className='d-flex justify-content-end' style={{width: '100%', height: 'max-content', cursor: 'pointer', lineHeight: '130%'}} onClick={() => {setServiceCardModal(false)}}>&#10006;</Col>

          </Col>


        <Col lg={4} md={4} sm={4} xs={2} style={{width: '100%', height: 'max-content', fontSize: 'calc(0.7em + 0.3vw)', fontWeight: '200', textTransform: 'lowercase', lineHeight: '130%'}}>{checkedCard.description}</Col>


      </Col>
    </Col>

    </Container>

  )
}

export default ServiceCardOpen
