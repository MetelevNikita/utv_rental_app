import './../css/services.css'


import { Row, Col, Container } from "react-bootstrap"
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


const serviceMenu = [
  {
    id: '1',
    label: 'Постановочные ролики',
    value: 'advertising_video'
  },
  {
    id: '2',
    label: 'Корпоративные фильмы',
    value: 'corporate_films'
  },
  {
    id: '3',
    label: 'Музыкальные клипы',
    value: 'music_video'
  },
  {
    id: '4',
    label: 'Документальные фильмы',
    value: 'doc_films'
  },
]
const [service, setService] = useState(serviceMenu[0])


const serviceCardModalHandler = (id) => {
  setIdCard(id)
  setServiceCardModal(true)
}




  return(
    <Container>
      <Row>
        <Col className="col-12">
            <div className="services-title">Наши работы</div>
            <div className="services-subtitle">Посмотрите проекты, снятые на нашем оборудовании</div>
        </Col>
      </Row>

      <Row md={12} className='mb-5'>

        {serviceMenu.map((item, index) => {
          return <Col md={3} sm={12} xs={12} key={index} className='d-flex justify-content-center mb-3' ><MyButton className={(service.value === item.value) ? 'myBtn myBtn-click' : 'myBtn'} value={item.value} onClick={(e) => {setService({...item, value: e.target.value})}}>{item.label}</MyButton></Col>
        })}

      </Row>

      {/*  */}




      {/*  */}


      <Row md={12}>
          {(portfolioSelector.length < 1) ? <></> : portfolioSelector.map((card, id) => {
            if(card.category === service.value) {

              console.log(card)

              return <Col key={id} md={4} sm={12} xs={12} onClick={() => {}} className='mb-3 service-card service-card-animation d-flex justify-content-md-start justify-content-center'><ServiceCard id={card.id} img={card.image_one} title={card.title} description={card.description} date={card.date}></ServiceCard></Col>
            } else {
              <div>Нет подобной котегории</div>
            }
          })}
      </Row>
      </Container>

  )
}

export default Services