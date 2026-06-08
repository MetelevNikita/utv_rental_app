import './../css/trash.css'
import { useState } from 'react'

// bootstrap

import { Col, Container, Row } from "react-bootstrap"

// redux

import { useDispatch, useSelector } from 'react-redux'
import { deleteToTrash } from '../../../store/trashActiveSlice'

// components

import TrashCard from './trash-card'
import MyButton from '../../../UI/myButton'
import MyButtonMotion from '../../../UI/MyButtonMotion'


const Trash = ({counter, modalRentalAnimation}) => {



  const mechanic = 12000
  const [finalPrice, setFinalPrice] = useState(0)


  const dispatch = useDispatch()
  const trashCard = useSelector(state => state.trashActive.trashActive)

  const { apiRental } = modalRentalAnimation
  let {counterTrash, setCounterTrash} = counter


  let sum = 0

  trashCard.map((item) => {
    return sum += Number(item.card.price)
  })


  const deleteTrashHandler = (item) => {
    dispatch(deleteToTrash(item))
    setCounterTrash(counterTrash-1)
  }






  function finalPriceData (trashCard) {


    let resPrice = 0

    if (!Array.isArray(trashCard)) return null

    for (let card of trashCard) {
      resPrice += parseInt(card.card.price) * parseInt(card.counterQuantity)
    }

    return resPrice + mechanic
  }
  

  const finalPriceString = finalPriceData(trashCard)




  return(

    <Container className='mt-5'>


      <Row md={12}>

          <Col md={12} sm={12} xs={12} className='mb-5'>
            <div>Оборудование сдается только с раьотой техника механика. <br></br> Стоимость работы механика 8ч - {mechanic}</div>
          </Col>

          {(trashCard.length < 1) ? <div className='trash-empty'>Корзина пуста</div> :  trashCard.map((card, index) => {
            return  <TrashCard className='d-flex justify-content-center' key={index} image={card.card.imageOne} title={card.title} price={card.card.price} counterQuantity={card.counterQuantity} del={() => {deleteTrashHandler(card.title)}}></TrashCard>
          })}

      </Row>




      <Row md={12} className='mt-5 mb-5 d-flex flex-column'>


          <Col style={{paddingLeft: 10 + 'px'}} md={6} sm={12} xs={12} className='mb-3'>

            <span style={{}}>Сумма с учетов всех расходов вместе с механиком камеры <br></br>(Цена расчитана на одну работчую смену 8 часов)</span>
            <div style={{marginTop: '10px'}}>Сумма: {finalPriceString} &#8381;</div>
          
          </Col>

          <Col md={6} sm={12} xs={12} className='mb-5'><MyButtonMotion onClick={() => {apiRental.start(
            {from: {opacity: 0, transform: 'scale(0)'}, to: {opacity: 1, transform: 'scale(1)'}
          })}} text={'Оформить заказ'}/></Col>



      </Row>

    </Container>

  )
}


export default Trash