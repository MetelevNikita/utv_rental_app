import './../css/services.css'


import { Container, Row, Col } from "react-bootstrap"
import { useState } from 'react'

//components

import MyButton from "../../../UI/myButton"
import ServiceCard from '../../../UI/serviceCard'

// server

import { serviceData } from '../../../servers/serviceData'

const Services = () => {

  const [service, setService] = useState('Конфернция')


  return(
    <>
      <Row>
        <Col className="col-12">
            <div className="services-title">НАЗВАНИЕ УСЛУГИ</div>
            <div className="services-subtitle">
            АэроЮнион Вертолетная Компания» официальный дилер Robinson Helicopter Company в России специализируется на продаже и обслуживании новых и ресурсных вертолетов.
            </div>
        </Col>
      </Row>


      <Row className='mb-5'>
        <Col className='mb-3' md={2} sm={12} xs={12}><MyButton style={{marginRight: 17 + 'px', width: 200 + 'px'}} value={'Конфернция'} onClick={(e) => {setService(e.target.value)}}>Конфернция</MyButton></Col>
        <Col className='mb-3' md={2} sm={12} xs={12}><MyButton style={{marginRight: 17 + 'px', width: 200 + 'px'}} value={'Концерт'} onClick={(e) => {setService(e.target.value)}}>Концерт</MyButton></Col>
        <Col className='mb-3' md={2} sm={12} xs={12}><MyButton style={{marginRight: 17 + 'px', width: 200 + 'px'}} value={'Спорт'} onClick={(e) => {setService(e.target.value)}}>Спорт</MyButton></Col>

      </Row>


      <Row>
          {serviceData.map((card, id) => {
            if(card.cotegory === service) {
              return <Col key={id} md={4} sm={12} xs={12} className='mb-3'><ServiceCard img={card.img} title={card.title} subtitle={card.subtitle} date={card.date}></ServiceCard></Col>
            } else {
              <div>Нет подобной котегории</div>
            }
          })}
      </Row>
    </>

  )
}

export default Services