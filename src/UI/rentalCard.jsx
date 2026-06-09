import './../UI/rentalCard.css'

//

import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { motion } from 'motion/react'

// components

import MyButton from './myButton'

// redux

import { useDispatch, useSelector } from 'react-redux'
import { addToTrash } from '../store/trashActiveSlice'

import { useState } from 'react'

//


const RentalCard = ({img, title, subtitleShort, quantity, price, id, counterQuantityTitle, addGetTrash, modalRentalButton}) => {

const {counterTrash, setCounterTrash} = addGetTrash
const {modalSubmitRentalOpen, apiSubmitRental} = modalRentalButton

let [counterQuntity, setCounterQuantity] = useState(1)

const dispatch = useDispatch()
const product = useSelector(state => state.product.product)
const trashCards = useSelector(state => state.trashActive)



const currentProduct = (product.length < 1) ? [] : product.find((item) => {
  return item.title === title
})





const trashHandler = (title, card, quantity) => {

  if(counterQuntity < 1) {
    return alert('Добавьте хотя бы одну позицию')
  }

  dispatch(addToTrash({
    title: title,
    card: card,
    counterQuantity: quantity
  }))
  setCounterTrash(counterTrash + 1)


  apiSubmitRental.start({
    from: {
      opacity: 0,
      transform:'scale(0)'
    },
    to: {
      opacity: 1,
      transform:'scale(1)'
    }
  })

}

//


const addQuantityPlus = () => {
  if(counterQuntity >= quantity) {
    return
  } 
    setCounterQuantity(counterQuntity += 1)
}


const addQuantityMinus = () => {


  if (counterQuntity === 1) {
    setCounterQuantity(1)
  } else {
    setCounterQuantity(counterQuntity -= 1)
  }
}


//



  return(
    <div className="rental-card-container" id={id}>
      <div className="rental-card-img-container">
        <Link to={`/rental/${id}`}><motion.div whileHover={{scale: 1.05}}><img className="rental-card-img" style={{objectFit: 'cover'}} src={img} alt="rentalCardImg" /></motion.div></Link>
      </div>


      <div className="rental-card-title">{title}</div>

      <hr className='rental-card-line-top'/>

      <div className="rental-card-subtitle">{subtitleShort}</div>


      <div className="rental-card-quantity-container">

          <div className='rental-card-quantity-title'>Выберите количество</div>

          <div className="rental-card-quantity-box">
            <button className="rental-card-quantity-counterMinus" onClick={addQuantityMinus}>-</button>
            <div className="rental-card-quantity-counterText">{counterQuntity}</div>
            <button className="rental-card-quantity-counterPlus" onClick={addQuantityPlus}>+</button>
          </div>

      </div>





      <div className="rental-card-quantity">Наличие: {quantity}шт.</div>

      <hr className='rental-card-line-bottom'/>

      <div className="rental-card-price">
        <div className="rental-card-price_title_time">Цена за 8 часов:</div>
        <div className="rental-card-price_title_data">{price} руб</div>
      </div>


      <Row className={'d-flex flex-column'}>

        <Col md={12} sm={12} xs={12} className='mb-2'>
          <Link to={`/rental/${id}`}>
            <MyButton className={'myBtn_blue'}>Посмотреть</MyButton>
          </Link>
        </Col>

        <Col md={12} sm={12} xs={12} className='mb-2'>
          <MyButton className={'myBtn'} onClick={() => {trashHandler(title, currentProduct, counterQuntity)}}>Добавить в корзину</MyButton>
        </Col>

      </Row>







    </div>
  )
}

export default RentalCard