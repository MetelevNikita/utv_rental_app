import MyButton from '../../../UI/myButton'
import MyButtonMotion from '../../../UI/MyButtonMotion'
import './../css/trash-card.css'

// bootstrap

import { Col, Container, Row } from 'react-bootstrap'


const TrashCard = ({ image, title, counterQuantity, price, del }) => {

  

  const currentPriceFromProduct = parseInt(price) * parseInt(counterQuantity) ?? 0

  return (
    <Container>
      <Row md={12} className='d-flex flex-row mt-4 mb-4'>

        <Col md={2} sm={12} xs={12} className='mt-2 mb-2'>
          <img className='trash-card-img' src={image} alt="" />
        </Col>

        <Col md={10} sm={12} xs={12} className='mt-2 mb-2'>
            <div className="trash-card-title">{title}</div>
            <hr className='trash-card-line'/>
            <div className='trash-card-quantity'>Количество: {counterQuantity}</div>
            <div className="trash-card-price mb-4">Цена: {price} &#8381;</div>
            <Col md={2} sm={12} xs={12}>
              <MyButtonMotion text={'Удалить'} onClick={() => {del(title)}} />
            </Col>
        </Col>

      </Row>
    </Container>

  )
 }


export default TrashCard