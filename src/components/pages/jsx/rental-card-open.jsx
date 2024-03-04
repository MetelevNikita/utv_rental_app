import './../css/rental-card-open.css'

//

import { Row, Col } from "react-bootstrap"

//

import { useParams } from "react-router-dom"
import { Navigate } from 'react-router-dom'

// components

import MyButton from '../../../UI/myButton'


// redux

import { useDispatch, useSelector } from 'react-redux'
import { addTrash } from '../../../store/trash-slice'
import { useState } from 'react'


const RentalCardOpen = ({modalRentalOpen, trash}) => {

  const params = useParams()
  const id = params.id

  const dispatch = useDispatch()

  let [counterQuntity, setCounterQuantity] = useState(0)
  const {modalRental, setModalRental} = modalRentalOpen
  const {counterTrash, setCounterTrash} = trash

  const rentalBase = useSelector((state => state.addRental.rental))

  const currentCard = (rentalBase.length < 1) ? [] : rentalBase.filter((item) => {
    return item.id === id

  })




  const addToTrash = () => {
    if(counterQuntity < 1) {
      return alert('Добавьте хотя бы одну позицию')
    }

    dispatch(addTrash({title: currentCard[0].rentalCard.title, card: currentCard[0].rentalCard, counterQuantity: counterQuntity}))
    setCounterTrash(counterTrash + 1)

  }


  const addQuantityPlus = () => {

    console.log('click')
    if(counterQuntity > currentCard[0].rentalCard.quantity) {
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






  if(currentCard.length < 1) {
    return <Navigate to="/" replace={true}></Navigate>
  }


  return(
    <>

      <Row className=''>

        <Col mb={6} sm={6} xs={12} className='mb-4'>

          <img className='card-open-img' src={currentCard[0].rentalCard.img} alt="card-img" />

        </Col>

        <Col mb={6} sm={6} xs={12} className='mb-5'>

          <div className="card-open-title">{currentCard[0].rentalCard.title}</div>
          <div className="card-open-subtitle">{currentCard[0].rentalCard.subtitlLong}</div>

          <hr className='card-open-line'/>

          <div className="rental-card-quantity-container">

              <div className='rental-card-quantity-title'>Выберите количество</div>

                  <div className="rental-card-quantity-box">
                    <button className="rental-card-quantity-counterMinus" onClick={addQuantityMinus}>-</button>
                    <div className="rental-card-quantity-counterText">{counterQuntity}</div>
                    <button className="rental-card-quantity-counterPlus" onClick={addQuantityPlus}>+</button>
                  </div>

          </div>



          <Row>
            <Col><div className="card-open-quantity">Количество: {currentCard[0].rentalCard.quantity}</div></Col>
            <Col><div className="card-open-price">Цена: {currentCard[0].rentalCard.price}</div></Col>
          </Row>


        </Col>
      </Row>


      <Row className='mb-5'>

        <Col mb={2} sm={2} xs={12} className='mb-3'><MyButton className={'myBtn'} style={{marginRight: 20 + 'px'}} onClick = {() => {addToTrash()}}>Добавить в корзину</MyButton></Col>
        <Col mb={2} sm={2} xs={12} className='mb-3'><MyButton className={'myBtn'} onClick={() => {setModalRental(true)}}>Задайте вопрос</MyButton></Col>

      </Row>


    </>



  )
}

export default RentalCardOpen