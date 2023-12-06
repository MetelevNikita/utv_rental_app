import './../css/rental-card-open.css'

//

import { Container, Row, Col } from "react-bootstrap"

//

import { useParams } from "react-router-dom"

// components

import MyButton from '../../../UI/myButton'


// redux

import { useDispatch, useSelector } from 'react-redux'
import { addTrash } from '../../../store/trash-slice'
import { useEffect, useState } from 'react'


const RentalCardOpen = ({modalRentalOpen, trash}) => {

  const params = useParams()
  const id = params.id
  const dispatch = useDispatch()


  const {modalRental, setModalRental} = modalRentalOpen
  const {counterTrash, setCounterTrash} = trash

  const [singleCard, setSingleCard] = useState([])
  const rentalBase = useSelector((state => state.addRental.rental))



  const currentCard = (rentalBase.length < 1) ? [] : rentalBase.filter((item) => {
    return item.id === id

  })

  console.log(currentCard)








  const addToTrash = () => {

    dispatch(addTrash(currentCard[0].rentalCard))
    setCounterTrash(counterTrash + 1)

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