import './../UI/rentalCard.css'

//

import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'


// components

import MyButton from './myButton'

// redux

import { useDispatch, useSelector } from 'react-redux'
import { addTrash } from '../store/trash-slice'
import { useState } from 'react'

//


const RentalCard = ({img, title, subtitleShort, quantity, price, id, counterQuantityTitle, addGetTrash, modalRentalSubmitButton}) => {

const {counterTrash, setCounterTrash} = addGetTrash
const {modalRentalSubmit, setModalRentalSubmit} = modalRentalSubmitButton

let [counterQuntity, setCounterQuantity] = useState(0)

const dispatch = useDispatch()
const rentalBase = useSelector((state) => state.addRental.rental)



const currentCard = (rentalBase.length < 1) ? [] : rentalBase.filter((item) => {
  return item.id === id
})




const addToTrash = () => {

  if(counterQuntity < 1) {
    return alert('Добавьте хотя бы одну позицию')
  }
  dispatch(addTrash({title: title, card: currentCard[0].rentalCard, counterQuantity: counterQuntity}))
  setCounterTrash(counterTrash + 1)
  setModalRentalSubmit(true)
}


const addQuantityPlus = () => {

  console.log('click')
  if(counterQuntity > quantity) {
    return
  }
    setCounterQuantity(counterQuntity++)

}



const addQuantityMinus = () => {
  if(counterQuntity !== 0) {
    setCounterQuantity(counterQuntity = counterQuntity - 1)
  } else {
    return
  }
}







  return(
    <div className="rental-card-container" id={id}>
      <img className="rental-card-img" src={img} alt="rentalCardImg" />

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

      <div className="rental-card-price">Цена: {price} руб</div>


      <Row className={'d-flex'}>


      <Col md={5} sm={12} xs={12} className='mb-2'><Link style={{marginRight: 10 + 'px'}} to={`/rental/${id}`}><MyButton className={'myBtn'}>Посмотреть</MyButton></Link></Col>
      <Col md={6} sm={12} xs={12} className='mb-2'><MyButton className={'myBtn'} onClick={() => {addToTrash()}}>Добавить в корзину</MyButton></Col>




      </Row>







    </div>
  )
}

export default RentalCard