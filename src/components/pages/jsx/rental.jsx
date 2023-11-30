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


const Rental = ({modalRentalOpen, trash}) => {

  const [rental, setRental] = useState('Камеры')



  return(

    <>

      <Row>
        <Col>
        <div className="rental-title">техника</div>
        <div className="rental-subtitle">АэроЮнион Вертолетная Компания» официальный дилер Robinson Helicopter Company в России специализируется на продаже и обслуживании новых и ресурсных вертолетов.</div>
        </Col>
      </Row>


      <Row className='mb-4'>
        <Col md={2} sm={12} xs={12} className='mb-2'><MyButton style={{width: 150 + 'px'}} value={'Камеры'} onClick={(e) => {setRental(e.target.value)}}>Камеры</MyButton></Col>
        <Col md={2} sm={12} xs={12} className='mb-2'><MyButton style={{width: 150 + 'px'}} value={'Свет'} onClick={(e) => {setRental(e.target.value)}}>Свет</MyButton></Col>
        <Col md={2} sm={12} xs={12} className='mb-2'><MyButton style={{width: 150 + 'px'}} value={'Звук'} onClick={(e) => {setRental(e.target.va1ue)}}>Звук</MyButton></Col>
        <Col md={2} sm={12} xs={12} className='mb-2'><MyButton style={{width: 150 + 'px'}} value={'Операторская техника'} onClick={(e) => {setRental(e.target.value)}}>техника</MyButton></Col>

      </Row>





      <Row>

        {rentalData.map((card, id) => {

          if (card.category === rental) {
            return <Col key={id} className='col-xl-4 col-md-4 col-sm-12 col-xs-12'><RentalCard modalRentalButton={modalRentalOpen} addGetTrash={trash} id={card.id} img={card.img} title={card.title} subtitleShort={card.subtitlShort} price={card.price} quantity={card.quantity}></RentalCard></Col>
          }
        })}

      </Row>


    </>


  )
}


export default Rental