import { FC } from 'react'
import { motion } from "motion/react"

// css
import './../css/openPage.css'

// 
import { Container, Row, Col } from 'react-bootstrap'

//
import U from '../../../asset/logo/U.png'
import T from '../../../asset/logo/T.png'
import V from '../../../asset/logo/V.png'

// 
import bgBlue from '../../../asset/logo/bg_blue.png'
import productionText from '../../../asset/logo/production.png'

const OpenPage = () => {
  return (


    <Container className='vh-100 vw-100 p-0 d-flex align-items-center justify-content-center'>
      <Row className='justify-content-center align-items-center m-0 w-100'>
        <Col xs={12} className='d-flex justify-content-center'>
          <div className='open_page_element_container'>
            <motion.img 
              className='open_page_letter' 
              src={U} 
              initial={{y: -100}} 
              animate={{y: 0, transition: {duration: 1, delay: 0}}} 
            />
          </div>

          <div className='open_page_element_container'>
            <motion.img 
              className='open_page_letter' 
              src={T} 
              initial={{y: -100}} 
              animate={{y: 0, transition: {duration: 1, delay: .3}}} 
            />
          </div>

          <div className='open_page_element_container'>
            <motion.img 
              className='open_page_letter' 
              src={V} 
              initial={{y: -100}} 
              animate={{y: 0, transition: {duration: 1, delay: .5}}} 
            />
          </div>
        </Col>
        
        <Col xs={12} className='d-flex flex-column justify-content-center'>
          <div className='open_page_word_container'>
            <motion.img 
              className='open_page_word_bg' 
              src={bgBlue} 
              initial={{opacity: 0, y: 20}} 
              animate={{opacity: 1, y: 0, transition: {duration: .5, delay: .5}}} 
            />
          </div>

          <div className='open_page_word_container'>
            <motion.img 
              className='open_page_word_text' 
              src={productionText} 
              initial={{opacity: 0}} 
              animate={{opacity: 1, transition: {duration: .5, delay: 1}}} 
            />
          </div>
        </Col>
      </Row>
    </Container>

  )
}

export default OpenPage