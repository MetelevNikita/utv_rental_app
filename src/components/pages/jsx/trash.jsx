import './../css/trash.css'
import { useEffect } from 'react'

// bootstrap

import { Col, Row } from "react-bootstrap"

// redux

import { useDispatch, useSelector } from 'react-redux'
import { getTrashAsync, postTrashAsync } from '../../../store/trashSlice'



// components

import TrashCard from './trash-card'
import MyButton from '../../../UI/myButton'






const Trash = ({counter, modalRentalAnimation}) => {

  useEffect(() => {
    dispatch(getTrashAsync())
  }, [])

  const dispatch = useDispatch()
  const trashCard = useSelector(state => state)


  const {modalRentalOpen, apiRental} = modalRentalAnimation
  let {counterTrash, setCounterTrash} = counter


  let sum = 0

  trashCard.map((item) => {
    return sum += Number(item.card.price)
  })




  const deleteTrashCardHandler = (e) => {
    setCounterTrash(counterTrash-1)
  }

  return(

    <>

      <Row md={12}>

          {(trashCard.length < 1) ? <div className='trash-empty'>Корзина пуста</div> :  trashCard.map((card, index) => {
            return  <TrashCard className='d-flex justify-content-center' key={index} img={card.card.img} title={card.card.title} price={card.card.price} counterQuantity={card.counterQuantity} del={() => {deleteTrashCardHandler(card.card.title)}}></TrashCard>
          })}

      </Row>




      <Row md={12} className='mt-5 mb-5 d-flex flex-column'>

          <Col md={6} sm={12} xs={12} className='mb-5'><MyButton className={'myBtn'} onClick={() => {apiRental.start(
            {from: {opacity: 0, transform: 'scale(0)'}, to: {opacity: 1, transform: 'scale(1)'}
          })}}>Оформить заказ</MyButton></Col>
          <Col style={{paddingLeft: 10 + 'px'}} md={6} sm={12} xs={12} className='mb-3'><div style={{marginLeft: 15 + 'px'}}>Сумма: {sum} &#8381;</div></Col>

      </Row>

    </>

  )
}


export default Trash