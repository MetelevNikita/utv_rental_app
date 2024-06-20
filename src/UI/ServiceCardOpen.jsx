import React from 'react'
import { useEffect } from 'react'

//

import { Col } from 'react-bootstrap'

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


  console.log(checkedCard)



  return (


    <Col ld={12} md={12} sm={12} xs={12} style={{width: "100%", height:  "100%", backdropFilter: 'blur(6px)', position: 'fixed', top: '0px', left: '0px'}}>

      <Col style={{width: '860px', height: '700px', backgroundColor: 'black', borderRadius: '67px', padding: '40px', position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}>


        <Col className='d-flex jus mb-5'><iframe width='800' height='400' src={checkedCard.link} frameborder="0" allowfullscreen></iframe></Col>


          <Col lg={8} md={8} sm={8} xs={8} className='d-flex align-items-center mb-4' style={{width: '100%', height:'max-content', fontSize: '18px', fontWeight: '400', textTransform: 'uppercase', lineHeight: '130%'}}>
          <Col c className='d-flex justify-content-start' style={{width: '100%', height: 'max-content', fontSize: '32px', fontWeight: '400', textTransform: 'uppercase', lineHeight: '110%'}}>{checkedCard.title}</Col>

          <Col className='d-flex justify-content-end' lg={2} md={2} xs={2} style={{height: 'max-content', cursor: 'pointer', lineHeight: '130%'}} onClick={() => {setServiceCardModal(false)}}>&#10006;</Col>

        </Col>


        <Col style={{width: '100%', height: 'max-content', fontSize: '14px', fontWeight: '200', textTransform: 'lowercase', lineHeight: '130%'}}>{checkedCard.description}</Col>


      </Col>
    </Col>

  )
}

export default ServiceCardOpen
