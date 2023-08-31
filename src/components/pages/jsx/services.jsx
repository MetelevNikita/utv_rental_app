import './../css/services.css'


import { Container, Row, Col } from "react-bootstrap"

//components

import MyButton from "../../../UI/myButton"
import ServiceCard from '../../../UI/serviceCard'

const Services = () => {

  return(
    <Container>
      <Row>
        <Col className="col-12">

            <div className="services-title">НАЗВАНИЕ УСЛУГИ</div>

            <div className="services-subtitle">
            АэроЮнион Вертолетная Компания» официальный дилер Robinson Helicopter Company в России специализируется на продаже и обслуживании новых и ресурсных вертолетов.
            </div>


        </Col>
      </Row>


      <Row>
        <Col>
        <MyButton>Услуга 1</MyButton>
        <MyButton style={{marginLeft: 17 + 'px'}}>Услуга 2</MyButton>
        <MyButton style={{marginLeft: 17 + 'px'}}>Услуга 3</MyButton>
        </Col>
      </Row>


      <Row>
        <Col>

          <ServiceCard />

        </Col>
      </Row>
    </Container>
  )
}

export default Services