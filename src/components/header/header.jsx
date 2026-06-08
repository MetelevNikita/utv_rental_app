import './header.css'
import { motion } from "motion/react"


// bootstrap

import { Container, Row, Col } from "react-bootstrap"



//

import { Link } from 'react-router-dom'



// img

import logoUtv from './../../asset/logoUTV.svg'
import trashIcon from './../../asset/icon trash.png'

//

import { useState } from 'react'
import { onScroll } from '@react-spring/shared'

const Header = ({trash}) => {

  const {counterTrash, setCounterTrash} = trash


  const Scroll = () => {
    window.scrollTo({
      top: 600,
      behavior: 'smooth'

    })
  }




  return(
    <Container>
      <Row className='d-flex justify-content-between mt-4 mb-4'>

        <Col className='d-flex'>
          <motion.div whileTap={{scale: 1.1}}><Link to={'/'}><img className="header-logo" src={logoUtv} alt="logoUtv" /></Link></motion.div>
        </Col>


        <Col className='d-flex justify-content-end align-items-center flex-xs-column'>



              <Col md={12} className='d-flex justify-content-end flex-md-row flex-column'>
                  <Col className='d-flex flex-row align-items-center justify-content-center'>
                    <motion.div whileTap={{scale: 1.1}}>
                      <Link to={'/trash'} onClick={() => {Scroll()}} className='d-flex'>
                          <div className='header-trash-counter'>Количество: {counterTrash}</div>
                          <img className='header-trash-img' src={trashIcon} alt="trashicon" />
                      </Link>
                    </motion.div>
                  </Col>

                  <Col className='d-flex flex-column justify-content-end'>
                      <div className="hedaer-contanct-title">Позвоните нам</div>
                      <div className="hedaer-contanct-phone">+7 (989) 951-90-63</div>
                  </Col>
              </Col>


        </Col>
      </Row>
      </Container>
  )
}

export default Header