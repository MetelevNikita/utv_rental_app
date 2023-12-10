import './../UI/rentalCard.css'

//

import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

// components

import MyButton from './myButton'

// redux

import { useDispatch, useSelector } from 'react-redux'
import { addTrash } from '../store/trash-slice'
import { useEffect, useState } from 'react'

//


const RentalCard = ({img, title, subtitleShort, quantity, price, id, addGetTrash, addGetQuantity}) => {

  const {counterTrash, setCounterTrash} = addGetTrash
  let {counterQuantity, setCounterQuantity} = addGetQuantity




  const dispatch = useDispatch()
  const rentalBase = useSelector((state) => state.addRental.rental)

  const currentCard = (rentalBase.length < 1) ? [] : rentalBase.filter((item) => {
    return item.id === id

  })




  const addToTrash = () => {

    dispatch(addTrash(currentCard[0].rentalCard))
    setCounterTrash(counterTrash + 1)

  }


  const counterQuantityPlus = () => {

    console.log(counterQuantity)

    setCounterQuantity(() => {
      return counterQuantity++
    })
  }


  const counterQuantityMinus = () => {

    console.log(counterQuantity)

    setCounterQuantity(() => {
      return counterQuantity--
    })
  }






  return(
    <div className="rental-card-container" id={id}>
      <img className="rental-card-img" src={img} alt="rentalCardImg" />

      <div className="rental-card-title">{title}</div>

      <hr className='rental-card-line-top'/>

      <div className="rental-card-subtitle">{subtitleShort}</div>


      <div className="rental-card-quantity-container">
      <button className="rental-card-quantity-counterMinus" onClick={counterQuantityMinus}>-</button>
      <div className="rental-card-quantity-counterText">{counterQuantity}</div>
      <button className="rental-card-quantity-counterPlus" onClick={counterQuantityPlus}>+</button>
      </div>



      <div className="rental-card-quantity">Количество: {quantity}шт.</div>

      <hr className='rental-card-line-bottom'/>

      <div className="rental-card-price">Цена: {price} руб</div>


      <Row className={'d-flex'}>


      <Col md={5} sm={12} xs={12} className='mb-2'><Link style={{marginRight: 10 + 'px'}} to={`/rental/${id}`}><MyButton className={'myBtn'}>Посмотреть</MyButton></Link></Col>
      <Col md={6} sm={12} xs={12} className='mb-2'><MyButton className={'myBtn'} onClick={() => {addToTrash()}}>Добавить в корзину</MyButton></Col>




      </Row>







    </div>
  )
}

export default RentalCard