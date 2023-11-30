import './../css/rental-card-open.css'

//

import { Container, Row, Col } from "react-bootstrap"

//

import { useParams } from "react-router-dom"
import { rentalData } from "../../../servers/rentalData"

// components

import MyButton from '../../../UI/myButton'


// redux

import { useDispatch, useSelector } from 'react-redux'
import { addTrash } from '../../../store/trash-slice'


const RentalCardOpen = ({modalRentalOpen, trash}) => {

  const dispatch = useDispatch()


  const {modalRental, setModalRental} = modalRentalOpen
  const {counterTrash, setCounterTrash} = trash




  const params = useParams()
  const id = params.id - 1
  const currentCard = rentalData[id]

  const addToTrash = () => {

    dispatch(addTrash(rentalData[id]))
    setCounterTrash(counterTrash + 1)

  }



  return(
    <>


      <Row className=''>

        <Col mb={6} sm={6} xs={12} className='mb-4'>

          <img className='card-open-img' src={currentCard.img} alt="card-img" />

        </Col>

        <Col mb={6} sm={6} xs={12} className='mb-5'>

          <div className="card-open-title">{currentCard.title}</div>
          <div className="card-open-subtitle">{currentCard.subtitleLong}</div>

          <hr className='card-open-line'/>

          <div className="card-open-quantity">Количество: {currentCard.quantity}</div>
          <div className="card-open-price">Цена: {currentCard.price}</div>

        </Col>
      </Row>


      <Row className='mb-4'>

        <Col mb={2} sm={2} xs={12} className='mb-3'><MyButton style={{marginRight: 20 + 'px'}} onClick = {() => {addToTrash()}}>Добавить в корзину</MyButton></Col>
        <Col mb={2} sm={2} xs={12} className='mb-3'><MyButton onClick={() => {setModalRental(true)}}>Задайте вопрос</MyButton></Col>

      </Row>



    </>



  )
}

export default RentalCardOpen