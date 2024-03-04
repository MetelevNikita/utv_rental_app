import './../css/services.css'


import { Row, Col } from "react-bootstrap"
import { useState } from 'react'

//components

import MyButton from "../../../UI/myButton"
import ServiceCard from '../../../UI/serviceCard'

// server

import { serviceData } from '../../../servers/serviceData'

const Services = () => {

  const serviceMenu = ['Конфернция', 'Концерт', 'Спорт']

  const [service, setService] = useState('Конфернция')




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
          return <Col key={index} className='d-flex justify-content-center mb-3' md={2} sm={12} xs={12}><MyButton className={(service === item) ? 'myBtn myBtn-click' : 'myBtn'} style={{marginRight: 17 + 'px', width: 200 + 'px'}} value={item} onClick={(e) => {setService(e.target.value)}}>{item}</MyButton></Col>
        })}

      </Row>


      <Row>
          {serviceData.map((card, id) => {
            if(card.cotegory === service) {
              return <Col key={id} md={4} sm={12} xs={12} className='mb-3 service-card service-card-animation'><ServiceCard img={card.img} title={card.title} subtitle={card.subtitle} date={card.date}></ServiceCard></Col>
            } else {
              <div>Нет подобной котегории</div>
            }
          })}
      </Row>
    </>

  )
}

export default Services