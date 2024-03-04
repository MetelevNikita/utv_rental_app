import './../css/rental.css'

// bootstrap

import { Row, Col } from 'react-bootstrap'

//

import { useState, useEffect } from 'react'

// components

import RentalCard from '../../../UI/rentalCard'
import MyButton from '../../../UI/myButton'

//


import { getFireStore } from '../../../store/rental-slice'
import { useSelector, useDispatch } from 'react-redux'



const Rental = ({modalRentalOpen, modalRentalSubmitOpen, trash}) => {


  const {modalRentalSubmit, setModalRentalSubmit} = modalRentalSubmitOpen
  const rentalMenu = ['Камеры', 'Свет', 'Звук' , 'Штативы', 'Техника для трансляций']
  const [rental, setRental] = useState('Камеры')



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
        <div className="rental-subtitle">Мы предлагаем широкий выбор оборудования, включая камеры, объективы, стабилизаторы, световое оборудование и многое другое. Все наше оборудование профессионального уровня и регулярно проходит техническое обслуживание, чтобы гарантировать его безупречную работу.</div>
        </Col>
      </Row>


      <Row className='mt-4' md={12}>

        {rentalMenu.map((item, index) => {
          return <Col key={index} md={2} sm={6} xs={12} className='mb-4'><MyButton className={(rental === item) ? 'myBtn myBtn-click' : 'myBtn'} style={{minWidth: 150 + 'px'}} value={item} onClick={(e) => {setRental(e.target.value)}}>{item}</MyButton></Col>
        })}

      </Row>


      <Row className='mt-4'>
        {rentalBase.rental.map((item, index) => {
          if(item.rentalCard.category === rental) {
            return <Col key={index} className='col-xl-4 col-md-4 col-sm-12 col-xs-12 rental-card'><RentalCard modalRentalSubmitButton={{modalRentalSubmit, setModalRentalSubmit}} modalRentalButton={modalRentalOpen} addGetTrash={trash} id={item.id} img={item.rentalCard.img} title={item.rentalCard.title} subtitleShort={item.rentalCard.subtitlShort} price={item.rentalCard.price} quantity={item.rentalCard.quantity} counterQuantityTitle={item.rentalCard.counterQuantity}></RentalCard></Col>
          }
        })}
      </Row>

    </>


  )
}


export default Rental