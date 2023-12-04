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


  const rentalMenu = ['Камеры', 'Свет', 'Звук' , 'Операторская техника']

  const [rental, setRental] = useState('Камеры')
  const [click ,setClick] = useState(false)
  const [desClick, setDesClick] = useState(true)

  console.log(click)


  const clickHandler = (e) => {

    setRental(e)
    setClick(true)
  }



  return(

    <>

      <Row>
        <Col>
        <div className="rental-title">техника</div>
        <div className="rental-subtitle">АэроЮнион Вертолетная Компания» официальный дилер Robinson Helicopter Company в России специализируется на продаже и обслуживании новых и ресурсных вертолетов.</div>
        </Col>
      </Row>


      <Row className='mb-4'>

        {rentalMenu.map((item) => {
          console.log(item)
          return <Col md={2} sm={12} xs={12} className='mb-2'><MyButton className={(rental === item) ? 'myBtn myBtn-click' : 'myBtn'} style={{minWidth: 150 + 'px'}} value={item} onClick={(e) => {clickHandler(e.target.value)}}>{item}</MyButton></Col>
        })}

      </Row>



      <Row className='mb-4 mt-4'>

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