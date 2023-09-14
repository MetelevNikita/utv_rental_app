import './../css/rental.css'

// bootstrap

import { Container, Row, Col } from 'react-bootstrap'

//

import { useState } from 'react'
import { Link } from 'react-router-dom'

// components

import RentalCard from '../../../UI/rentalCard'
import MyButton from '../../../UI/myButton'
import { rentalData } from '../../../servers/rentalData'


const Rental = ({modalRentalOpen}) => {

  const [rental, setRental] = useState('Камеры')



  return(
    <Container>
      <Row>
        <Col>
        <div className="rental-title">оборудование для съeмок</div>
        <div className="rental-subtitle">АэроЮнион Вертолетная Компания» официальный дилер Robinson Helicopter Company в России специализируется на продаже и обслуживании новых и ресурсных вертолетов.</div>
        </Col>
      </Row>

      <Row>
        <Col className='d-flex justify-content-between flex-xl-row flex-md-row flex-sm-column mb-5 '>

        <div className="rental-button-left">

        <MyButton style={{marginRight: 21 + 'px', marginBottom: 20 + 'px'}} value={'Камеры'} onClick={(e) => {setRental(e.target.value)}}>Камеры</MyButton>
        <MyButton style={{marginRight: 21 + 'px', marginBottom: 20 + 'px'}} value={'Свет'} onClick={(e) => {setRental(e.target.value)}}>Свет</MyButton>
        <MyButton style={{marginRight: 21 + 'px', marginBottom: 20 + 'px'}} value={'Звук'} onClick={(e) => {setRental(e.target.value)}}>Звук</MyButton>
        <MyButton  value={'Операторская техника'} onClick={(e) => {setRental(e.target.value)}}>Операторская техника</MyButton>

        </div>


        <div className="rental-button-right">

            <Link to={'/rental'}><MyButton>Посмотреть все</MyButton></Link>

        </div>

        </Col>
      </Row>


      <Row>

        {rentalData.map((card, id) => {

          if (card.category === rental) {
            return <Col key={id} className='col-xl-4 col-md-4 col-sm-12 col-xs-12'><RentalCard modalRentalButton={modalRentalOpen} id={card.id} img={card.img} title={card.title} subtitle={card.subtitle} price={card.price} quantity={card.quantity}></RentalCard></Col>
          }
        })}

      </Row>
    </Container>

  )
}


export default Rental