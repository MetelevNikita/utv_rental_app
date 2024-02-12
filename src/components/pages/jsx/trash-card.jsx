import MyButton from '../../../UI/myButton'
import './../css/trash-card.css'

// bootstrap

import { Col, Row } from 'react-bootstrap'





const TrashCard = (props) => {


  return (

    <Row className='mb-4'>

      <Col md={2} sm={4} xs={12}>
        <img className='trash-card-img' src={props.img} alt="" />
      </Col>

      <Col md={4} sm={4} xs={12}>
        <div className="trash-card-info-box">

          <div className="trash-card-title">{props.title}</div>
          <hr className='trash-card-line'/>
          <div className='trash-card-quantity'>Количество: {props.counterQuantity}</div>
          <div className="trash-card-price">Цена: {props.price} &#8381;</div>


          <MyButton className={'myBtn'} {...props}>Удалить</MyButton>

        </div>
      </Col>

    </Row>

  )
 }


export default TrashCard