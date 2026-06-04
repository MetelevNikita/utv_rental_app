import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"

// 

import { Col, Row } from 'react-bootstrap'


// 

import './PackCard.css'

// components

import MyButton from './myButton'

// 

const PackCard = ({id, img, title, description, quantity, price}) => {
  return (
    <div className='pack-card-container'>

      <div className='pack-card-wrapper'>

          <div className='pack-card-image-wrapper'>
              <Link to={`/pack/${id}`}><motion.div whileHover={{scale: 1.05}}><img className='pack-card-image' src={img} alt="image" /></motion.div></Link>
          </div>

          <div className="pack-card-title">{title}</div>
          <hr className='pack-card-line-top'/>
          <div className="pack-card-subtitle">{description}</div>


          <div className="pack-card-quantity">Наличие: {quantity}шт.</div>
          <hr className='pack-card-line-bottom'/>

          <div className="pack-card-price">
            <div className="pack-card-price_title_time">Цена за 8 часов:</div>
            <div className="pack-card-price_title_data">{price} руб</div>
          </div>
          
          
          <Row className={'d-flex flex-column justify-content-between'}>
            <Col md={12} sm={12} xs={12} className='mb-2'><Link to={`/pack/${id}`}><MyButton className={'myBtn_blue'} onClick={() => {}}>Подробнее</MyButton></Link></Col>
            <Col md={12} sm={12} xs={12} className='mb-2'><MyButton className={'myBtn_blue'} onClick={() => {}}>Добавить в корзину</MyButton></Col>
          </Row>

      </div>
      
    </div>
  )
}

export default PackCard
