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

  console.log(modalRental)

  const selector = useSelector(state => state.addTrash.trash)
  console.log(selector)


  let sum = 0

  selector.map((card) => {
    return sum += card.price
  })


  return(

    <Container className='trash-container'>
      <Row>
        <Col className='col-12'>

          {(selector.length < 1) ? <div className='trash-empty'>Корзина пуста</div> :  selector.map((card) => {
            return <TrashCard img={card.img} title={card.title} price={card.price}></TrashCard>
          })}
        </Col>
      </Row>

      <Row>
        <Col className='col-12 mt-5 d-flex align-items-center'>


            <div>Сумма: {sum} $</div>
            <MyButton onClick={() => {setModalRental(true)}} style={{marginLeft: 20 + 'px'}}>Оформить заказ</MyButton>
        </Col>
      </Row>
    </Container>

  )
}


export default Trash