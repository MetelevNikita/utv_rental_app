import './../css/trash.css'

// bootstrap

import { Container, Col, Row } from "react-bootstrap"

// redux

import { useDispatch, useSelector } from 'react-redux'


// components

import TrashCard from './trash-card'
import MyButton from '../../../UI/myButton'





const Trash = ({modalCreateOpen}) => {

  const {modalRental, setModalRental} = modalCreateOpen

  const selector = useSelector(state => state.addTrash.trash)
  console.log(selector)

  let sum = 0

  selector.map((card) => {
    return sum += card.price
  })


  return(

    <>

      <Row>


          {(selector.length < 1) ? <div className='trash-empty'>Корзина пуста</div> :  selector.map((card) => {
            return  <TrashCard img={card.img} title={card.title} price={card.price}></TrashCard>
          })}

      </Row>

      <Row className='mt-5 mb-5 d-flex align-items-center'>


          <Col md={2} sm={5} xs={12} className='mb-3'><MyButton className={'myBtn'} onClick={() => {setModalRental(true)}}>Оформить заказ</MyButton></Col>
          <Col md={2} sm={5} xs={12} className='mb-3'><div>Сумма: {sum} $</div></Col>

      </Row>



    </>



  )
}


export default Trash