import './header.css'


// bootstrap

import { Container, Row, Col } from "react-bootstrap"


//

import { Link } from 'react-router-dom'



// img

import logoUtv from './../../asset/logoUTV.svg'
import trashIcon from './../../asset/icon trash.png'

//

import { useState } from 'react'

const Header = ({trash}) => {

  const {counterTrash, setCounterTrash} = trash




  return(
      <Row className='d-flex justify-content-between mt-4 mb-4'>

        <Col md={4} sm={2} xs={4} className='d-flex'>
          <Link to={'/'}><img className="header-logo" src={logoUtv} alt="logoUtv" /></Link>
        </Col>


        <Col md={8} sm={8} xs={8} className='d-flex justify-content-end align-items-center flex-xs-column'>



              <Col md={8} className='d-flex justify-content-end flex-xs-row'>
                  <Col md={3} sm={8} xs={8} className='d-flex flex-row justify-content-center'>
                    <Link to={'/trash'} className='d-flex'>
                          <div className='header-trash-counter'>Количество: {counterTrash}</div>
                          <img className='header-trash-img' src={trashIcon} alt="trashicon" />
                      </Link>
                  </Col>

                  <Col md={5} sm={8} xs={8} className='d-flex flex-column justify-content-end'>
                      <div className="hedaer-contanct-title">Позвоните нам</div>
                      <div className="hedaer-contanct-phone">8 (800) 000-00-00</div>
                  </Col>
              </Col>





        </Col>




      </Row>
  )
}

export default Header