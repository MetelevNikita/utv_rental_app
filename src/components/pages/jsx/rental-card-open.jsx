import './../css/rental-card-open.css'

//

import { Container, Row, Col } from "react-bootstrap"

//

import { useParams } from "react-router-dom"
import { rentalData } from "../../../servers/rentalData"

// components

import MyButton from '../../../UI/myButton'

//

const RentalCardOpen = ({modalRentalOpen}) => {

  const {modalRental, setModalRental} = modalRentalOpen



  const params = useParams()
  const id = params.id - 1
  const currentCard = rentalData[id]



  return(
    <Container className="open-card-container">

      <Row>


              <Col className='col-xl-6 col-md-6 col-sm-12'>

                <img src={currentCard.img} alt="card-img" />

              </Col>

              <Col className='col-xl-6 col-md-6 col-sm-12'>

                <div className="card-open-title">{currentCard.title}</div>
                <div className="card-open-subtitle">{currentCard.subtitleLong}</div>

                <hr className='card-open-line'/>

                <div className="card-open-quantity">Количество: {currentCard.quantity}</div>
                <div className="card-open-price">Цена: {currentCard.price}</div>

              </Col>
      </Row>


      <Row>
        <Col className='col-12 mt-5'>
          <MyButton>Добавить в корзину</MyButton>
          <MyButton style={{marginLeft: 20 + 'px'}} onClick={() => {setModalRental(true)}}>Задайте вопрос</MyButton>
        </Col>
      </Row>

    </Container>
  )
}

export default RentalCardOpen