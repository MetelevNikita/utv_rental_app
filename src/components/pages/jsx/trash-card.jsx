import MyButton from '../../../UI/myButton'
import './../css/trash-card.css'

// bootstrap

import { Col, Row } from 'react-bootstrap'


const TrashCard = (props) => {


  return (

    <Row md={12}>

      <Col md={12} sm={12} xs={12} className='mb-4 mt-4 d-flex  justify-content-start align-items-center'>
        <img className='trash-card-img' src={props.img} alt="" />
      </Col>

      <Col md={12} sm={12} xs={12}>

          <div className="trash-card-title">{props.title}</div>
          <hr className='trash-card-line'/>
          <div className='trash-card-quantity'>Количество: {props.counterQuantity}</div>
          <div className="trash-card-price mb-4">Цена: {props.price} &#8381;</div>


          <MyButton className={'myBtn'} onClick={() => {props.del(props.title)}}>Удалить</MyButton>


      </Col>

    </Row>

  )
 }


export default TrashCard