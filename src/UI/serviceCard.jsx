import { Link } from 'react-router-dom'
import './serviceCard.css'

// 

import { motion } from "motion/react"

// 

import { Container, Row, Col } from 'react-bootstrap'

// components

import MyButton from './myButton'


const ServiceCard = ({id, img, title, description}) => {


  const titleShort = `${description.substring(0, 40)}...`


  return(
    <Container className="service-card-container">

      <Row className='mb-4'>
          <Link to={`service/${id}`}><motion.div whileHover={{scale: 1.03}} whileTap={{scale: 1.05}} className='service-card-img_wrapper'>
            <img className='service-card-img' src={img} alt="serviceImg" />
          </motion.div></Link>
          
          <div className="service-card-title">{title}</div>

          <hr className='service-card-line'/>

          <div className="service-card-subtitle">{titleShort}</div>
      </Row>


      <Row>
        <Col md={12}>
          <Link to={`/service/${id}`} >
              <MyButton className={'myBtn_blue'} onClick={() => {}}>Подробнее</MyButton>
          </Link>
        </Col>
      </Row>

    </Container>
  )
}

export default ServiceCard