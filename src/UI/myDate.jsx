import './myDate.css'

//


import { Col, Row } from 'react-bootstrap'

const MyDate = (props) => {


  return(

    <Row className='d-flex flex-column align-items-center justify-content-center mb-2'>
      <Col style={{height: 20 + 'px', width: 100 + '%'}} className='d-flex flex-column justify-content-center align-items-center mt-2' md={5}><span className='myDate-title'>{props.title}</span></Col>
      <Col style={{height: 50 + 'px', width: 100 + '%'}} className='d-flex flex-column justify-content-center align-items-center mt-2' md={5}><input className='myDate' type="date" {...props}/></Col>
    </Row>


  )
}


export default MyDate