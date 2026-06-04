import MyButton from '../../../UI/myButton'
import './../css/trash-card.css'

// bootstrap

import { Col, Container, Row } from 'react-bootstrap'


const TrashCard = ({ image, title, counterQuantity, price, del }) => {

  

  const currentPriceFromProduct = parseInt(price) * parseInt(counterQuantity) ?? 0

  return (
    <Container>

    <Row md={12}>

      <Col md={12} sm={12} xs={12} className='mb-4 mt-4 d-flex  justify-content-start align-items-center'>
        <img className='trash-card-img' src={image} alt="" />
      </Col>

      <Col md={12} sm={12} xs={12}>

          <div className="trash-card-title">{title}</div>
          <hr className='trash-card-line'/>
          <div className='trash-card-quantity'>Количество: {counterQuantity}</div>
          <div className="trash-card-price mb-4">Цена: {price} &#8381;</div>


          <MyButton className={'myBtn'} onClick={() => {del(title)}}>Удалить</MyButton>


      </Col>

    </Row>
    </Container>

  )
 }


export default TrashCard