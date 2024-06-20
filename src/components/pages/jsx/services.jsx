import './../css/services.css'


import { Row, Col } from "react-bootstrap"
import { useState, useEffect } from 'react'
import { Link  } from 'react-router-dom'

//components

import MyButton from "../../../UI/myButton"
import ServiceCard from '../../../UI/serviceCard'


// redux

import { useSelector, useDispatch  } from 'react-redux'
import { getPortfolioAsync } from '../../../store/portfolioSlice'


//

const Services = ({ serviceCardModalOpen, idCardModel }) => {

  const { serviceCardModal, setServiceCardModal } = serviceCardModalOpen
  const { idCard, setIdCard } = idCardModel




  useEffect(() => {
    dispatch(getPortfolioAsync())
}, [])

const dispatch  = useDispatch()
const portfolioSelector = useSelector((state) => state.portfolio.portfolio)

const serviceMenu = ['Конфернции', 'Концерты', 'Спорт', 'Городские мероприятия']
const [service, setService] = useState('Конфернция')


const serviceCardModalHandler = (id) => {

  setIdCard(id)
  setServiceCardModal(true)

}






  return(
    <>
      <Row>
        <Col className="col-12">
            <div className="services-title">Наши услуги включают в себя:</div>
            <div className="services-subtitle">
              — Организацию и проведение прямых трансляций в интернете<br></br>
              — Разработку индивидуальных решений для каждого клиента<br></br>
              — Использование новейших технологий и оборудования<br></br>
              — Предоставление возможности взаимодействия с аудиторией через чат и другие интерактивные функции
            </div>
        </Col>
      </Row>

      <Row md={12} className='mb-5'>

        {serviceMenu.map((item, index) => {
          return <Col key={index} className='d-flex justify-content-center mb-3' md={2} sm={12} xs={12}><MyButton className={(service === item) ? 'myBtn myBtn-click' : 'myBtn'} style={{marginRight: 17 + 'px', width: 220 + 'px', height: '70px'}} value={item} onClick={(e) => {setService(e.target.value)}}>{item}</MyButton></Col>
        })}

      </Row>


      <Row md={12}>
          {portfolioSelector.map((card, id) => {
            if(card.category === service) {
              return <Col key={id} md={4} sm={12} xs={12} onClick={() => {serviceCardModalHandler(card.id)}} className='mb-3 service-card service-card-animation d-flex justify-content-md-start justify-content-center'><ServiceCard img={card.image} title={card.title} subtitle={card.subtitle} date={card.date}></ServiceCard></Col>
            } else {
              <div>Нет подобной котегории</div>
            }
          })}
      </Row>

    </>

  )
}

export default Services