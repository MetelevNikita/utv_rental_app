import './../css/rental.css'

// bootstrap

import { Container, Row, Col } from 'react-bootstrap'

//

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// components

import RentalCard from '../../../UI/rentalCard'
import MyButton from '../../../UI/myButton'

//


import { getFireStore } from '../../../store/rental-slice'
import { useSelector, useDispatch } from 'react-redux'



const Rental = ({modalRentalOpen, trash}) => {


  const rentalMenu = ['Камеры', 'Свет', 'Звук' , 'Операторская техника']

  const [rental, setRental] = useState('Камеры')
  const [click ,setClick] = useState(false)



  const rentalBase = useSelector((state => state.addRental))
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getFireStore())
  }, [])



  return(

    <>

      <Row>
        <Col>
        <div className="rental-title">техника</div>
        <div className="rental-subtitle">АэроЮнион Вертолетная Компания» официальный дилер Robinson Helicopter Company в России специализируется на продаже и обслуживании новых и ресурсных вертолетов.</div>
        </Col>
      </Row>


      <Row className='mb-4'>

        {rentalMenu.map((item, index) => {
          return <Col key={index} md={2} sm={6} xs={12} className='mb-2'><MyButton className={(rental === item) ? 'myBtn myBtn-click' : 'myBtn'} style={{minWidth: 150 + 'px'}} value={item} onClick={(e) => {setRental(e.target.value)}}>{item}</MyButton></Col>
        })}

      </Row>


      <Row className='mb-4 mt-4'>
        {rentalBase.rental.map((item, index) => {
          if(item.rentalCard.category === rental) {
            return <Col key={index} className='col-xl-4 col-md-4 col-sm-12 col-xs-12'><RentalCard modalRentalButton={modalRentalOpen} addGetTrash={trash} id={item.id} img={item.rentalCard.img} title={item.rentalCard.title} subtitleShort={item.rentalCard.subtitlShort} price={item.rentalCard.price} quantity={item.rentalCard.quantity} counterQuantityTitle={item.rentalCard.counterQuantity}></RentalCard></Col>
          }
        })}
      </Row>

    </>


  )
}


export default Rental