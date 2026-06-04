import React, {useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'motion/react'

// css

import '../css/service_card_open.css'

// redux

import {useDispatch, useSelector} from 'react-redux'
import {getPortfolioAsync} from '../../../store/portfolioSlice'

// 

import { Container, Row, Col } from 'react-bootstrap'

const ServiceCardOpen = () => {

  const params = useParams()
  let {id} = params

  useEffect(() => {
    dispatch(getPortfolioAsync())
  }, [])

  const dispatch = useDispatch()
  const currentPortfolio = useSelector(state => state.portfolio.portfolio)[0]

  // 


  const serviceMenu = [
  {
    id: '1',
    label: 'Постановочные ролики',
    value: 'advertising_video'
  },
  {
    id: '2',
    label: 'Корпоративные фильмы',
    value: 'corporate_films'
  },
  {
    id: '3',
    label: 'Музыкальные клипы',
    value: 'music_video'
  },
  {
    id: '4',
    label: 'Документальные фильмы',
    value: 'doc_films'
  },
]


  if (!currentPortfolio || currentPortfolio === undefined) {
    return <div>Loading</div>
  }


  const currentCategory = serviceMenu.find(item => item.value == currentPortfolio.category)


  return (
    <Container>

      <Row className='d-flex flex-column mt-5 mb-5'>
        <Col>

          <div className='service_card_open_text_wrapper'>

            <div className='service_card_open_title'>{currentPortfolio.title}</div>
            <div className='service_card_open_category'>Категория: {currentCategory.label}</div>

            <hr />

            <div className='service_card_open_description'>Описание: {currentPortfolio.description}</div>
            <div className='service_card_open_set'>Что исползовали: {currentPortfolio.set}</div>


            <div className='service_card_open_link'>Ссылка: <Link to={currentPortfolio.link} target='_blank'>{currentPortfolio.link}</Link></div>

          </div>

        </Col>
      </Row>


      <Row className='d-flex'>

        <Col>
          <motion.div whileHover={{scale: 1.1}}>
              <img
                className='service_card_open_img'
                src={currentPortfolio.image_one}
                alt='image_one'
              />
          </motion.div>
        </Col>

        <Col>
          <motion.div whileHover={{scale: 1.1}}>
              <img
                className='service_card_open_img'
                src={currentPortfolio.image_two}
                alt='image_two'
              />
          </motion.div>
        </Col>


        <Col>
          <motion.div whileHover={{scale: 1.1}}>
              <img
                className='service_card_open_img'
                src={currentPortfolio.image_three}
                alt='image_three'
              />
          </motion.div>
        </Col>


      </Row>
    </Container>
  )
}

export default ServiceCardOpen
