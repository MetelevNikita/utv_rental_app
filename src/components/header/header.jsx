import './header.css'


// bootstrap

import { Container, Row, Col } from "react-bootstrap"


// Rotert

import { Link } from 'react-router-dom'


// img

import logoUtv from './../../asset/logoUTV.svg'
import trashIcon from './../../asset/icon trash.png'

//

import { useState } from 'react'

const Header = ({trash}) => {

  const {counterTrash, setCounterTrash} = trash




  return(
    <Container className='header-container'>
      <Row>

        <Col className="header-box justify-content-start col-3">
          <Link to={'/'}><img className="header-logo" src={logoUtv} alt="logoUtv" /></Link>

        </Col>

        <Col className="header-box col-5 d-flex flex-xl-row flex-sm-column justify-content-start">
            <Link to='about' spy={true} smooth={true} offset={10} duration={500} className="header-menu-items">О нас</Link>
            <Link to='service' spy={true} smooth={true} offset={10} duration={500} className="header-menu-items">Услуги</Link>
            <Link to='rental' spy={true} smooth={true} offset={140} duration={500} className="header-menu-items">Аренда техники</Link>
            <Link to='team' spy={true} smooth={true} offset={10} duration={500} className="header-menu-items">Команда</Link>
            <Link to='contacts' spy={true} smooth={true} offset={10} duration={500} className="header-menu-items">Контакты</Link>
        </Col>

        <Col className="header-box justify-content-end col-4">

          <Link to={'/trash'}>
            <div className="header-trash-box">
              <div className='header-trash-counter'>Количество: {counterTrash}</div>
              <img className='header-trash-img' src={trashIcon} alt="trashicon" />
            </div>
          </Link>



          <div className="hedaer-contact-box">
            <div className="hedaer-contanct-title">Позвоните нам</div>
            <div className="hedaer-contanct-phone">8 (800) 000-00-00</div>
          </div>
        </Col>

      </Row>
    </Container>
  )
}

export default Header