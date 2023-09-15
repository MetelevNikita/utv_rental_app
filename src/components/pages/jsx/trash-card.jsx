import './../css/trash-card.css'

// bootstrap

import { Container, Col, Row } from 'react-bootstrap'



const TrashCard = (props) => {







  return (
    <Container>
      <Row>

        <Col className='col-xl-12 col-md-12 col-sm-12 d-flex mt-3'>

            <img className='trash-card-img' src={props.img} alt="" />

            <div className="trash-card-info-box">

              <div className="trash-card-title">{props.title}</div>
              <hr className='trash-card-line'/>
              <div className="trash-card-price">Цена: {props.price} $</div>

            </div>

        </Col>
      </Row>
    </Container>
  )
 }


export default TrashCard