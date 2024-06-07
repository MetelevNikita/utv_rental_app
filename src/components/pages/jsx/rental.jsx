import './../css/rental.css'

// bootstrap

import { Row, Col } from 'react-bootstrap'

//

import { useState, useEffect } from 'react'

// components

import RentalCard from '../../../UI/rentalCard'
import MyButton from '../../../UI/myButton'

//


import { useSelector, useDispatch } from 'react-redux'
import { getProductAsync } from '../../../store/productSlice'



const Rental = ({trash, modalRentalSubmitAnimation}) => {

  useEffect(() => {
    dispatch(getProductAsync())
  }, [])

  const dispatch = useDispatch()
  const rentalProduct = useSelector(state => state.product.product)

  const {modalSubmitRentalOpen, apiSubmitRental} = modalRentalSubmitAnimation


  const rentalMenu = ['Камеры', 'Свет', 'Звук' , 'Операторское оборудование', 'Техника для трансляций']
  const [rental, setRental] = useState('Камеры')



  const shortText = (text) => {

    if (text.length  > 100)  {
      return  text.slice(0, 100) + '...'
    }
  }




  return(

    <>

      <Row>
        <Col>
        <div className="rental-title">техника</div>
        <div className="rental-subtitle">Мы предлагаем широкий выбор оборудования, включая камеры, объективы, стабилизаторы, световое оборудование и многое другое. Все наше оборудование профессионального уровня и регулярно проходит техническое обслуживание, чтобы гарантировать его безупречную работу.</div>
        </Col>
      </Row>


      <Row className='mt-4' md={12} xs={12} sm={12}>

            {rentalMenu.map((item, index) => {
              return <Col key={index} md={2} sm={6} xs={12} className='d-flex justify-content-around mb-4'><MyButton className={(rental === item) ? 'myBtn myBtn-click' : 'myBtn'} style={{minWidth: 200 + 'px', height: 70 + 'px'}} value={item} onClick={(e) => {setRental(e.target.value)}}>{item}</MyButton></Col>
            })}

      </Row>


      <Row md={12} className='mt-4'>
        {rentalProduct.map((item, index) => {
          if(item.category === rental) {
            return <Col md={4} key={index} className='rental-card d-flex justify-content-md-around justify-content-center'><RentalCard modalRentalButton={modalRentalSubmitAnimation} addGetTrash={trash} id={item.title} img={item.image} title={item.title} subtitleShort={shortText(item.description)} price={item.price} quantity={item.quantity} counterQuantityTitle={item.counterQuantity}></RentalCard></Col>
          }
        })}
      </Row>

    </>


  )
}


export default Rental