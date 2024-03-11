import './../css/trash.css'

// bootstrap

import { Col, Row } from "react-bootstrap"

// redux

import { useDispatch, useSelector } from 'react-redux'
import { deleteTrash } from '../../../store/trash-slice'


// components

import TrashCard from './trash-card'
import MyButton from '../../../UI/myButton'





const Trash = ({modalCreateOpen, counter}) => {

  const {modalRental, setModalRental} = modalCreateOpen
  let {counterTrash, setCounterTrash} = counter



  const dispatch = useDispatch()
  const trashCards = useSelector(state => state.addTrash.trash)



  let sum = 0

  trashCards.map((item) => {
    return sum += Number(item.card.price)
  })




  const deleteTrashCardHandler = (e) => {
    dispatch(deleteTrash(e))
    setCounterTrash(counterTrash-1)
  }

  return(

    <>

      <Row md={12}>

          {(trashCards.length < 1) ? <div className='trash-empty'>Корзина пуста</div> :  trashCards.map((card, index) => {
            return  <TrashCard className='d-flex justify-content-center' key={index} img={card.card.img} title={card.card.title} price={card.card.price} counterQuantity={card.counterQuantity} onClick={() => {deleteTrashCardHandler(card.title)}}></TrashCard>
          })}

      </Row>




      <Row md={12} className='mt-5 mb-5 d-flex flex-column'>

          <Col md={6} sm={12} xs={12} className='mb-5'><MyButton className={'myBtn'} onClick={() => {setModalRental(true)}}>Оформить заказ</MyButton></Col>
          <Col style={{paddingLeft: 10 + 'px'}} md={6} sm={12} xs={12} className='mb-3'><div style={{marginLeft: 15 + 'px'}}>Сумма: {sum} &#8381;</div></Col>

      </Row>

    </>

  )
}


export default Trash