import './../css/trash.css'

// bootstrap

import { Container, Col, Row } from "react-bootstrap"

// redux

import { useDispatch, useSelector } from 'react-redux'
import { deleteTrash } from '../../../store/trash-slice'


// components

import TrashCard from './trash-card'
import MyButton from '../../../UI/myButton'





const Trash = ({modalCreateOpen}) => {

  const {modalRental, setModalRental} = modalCreateOpen
  const dispatch = useDispatch()

  const trashCards = useSelector(state => state.addTrash.trash)
  console.log(trashCards)


  const selector = useSelector(state => state.addArchive.archive)
  console.log(selector)



  let sum = 0

  trashCards.map((card) => {
    return sum += Number(card.price)
  })


  const deleteTrashCardHandler = (e) => {
    dispatch(deleteTrash(e))
  }

  return(

    <>

      <Row>


          {(trashCards.length < 1) ? <div className='trash-empty'>Корзина пуста</div> :  trashCards.map((card, index) => {
            console.log(card)
            return  <TrashCard key={index} img={card.card.img} title={card.card.title} price={card.card.price} counterQuantity={card.counterQuantity} onClick={() => {deleteTrashCardHandler(card.title)}}></TrashCard>
          })}

      </Row>




      <Row className='mt-5 mb-5 d-flex align-items-center'>


          <Col md={2} sm={5} xs={12} className='mb-3'><MyButton className={'myBtn'} onClick={() => {setModalRental(true)}}>Оформить заказ</MyButton></Col>
          <Col md={2} sm={5} xs={12} className='mb-3'><div>Сумма: {sum}$</div></Col>

      </Row>



    </>



  )
}


export default Trash