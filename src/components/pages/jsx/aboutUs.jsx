import './../css/aboutUs.css'

import { Container, Col, Row } from "react-bootstrap"

// components

import AboutInfo from "../../../UI/aboutInfo"

// img

import logo1 from './../../../asset/logo_partners/Gazprom.svg'
import logo2 from './../../../asset/logo_partners/MegaFon.svg'
import logo3 from './../../../asset/logo_partners/MegaFon2.svg'




const AboutUs = () => {

  const arrOfPartners = [logo1, logo2, logo3]

  return(
      <>
      <Row>
        <Col className="col-12">
          <div className="about-title-box">
              <div className="about-title">НАДЕЖНАЯ КОМАНДА</div>
              <div className="about-title">РАБОТАЕМ НА КАЧЕСТВО</div>
          </div>

          <div className="about-subtitile">Текст о компании, цели и достижения за время работы, опыт работы и награды сколько человек в команде, уровень работы и ее описание, возможно указать перечень работ или список и т д</div>
        </Col>
      </Row>


      <Row>

        <Col md={3} sm={12} xs={12}><AboutInfo title={'c 2015'} subtitle={'года на рынке'} /></Col>
        <Col md={3} sm={12} xs={12}><AboutInfo title={'1 000'} subtitle={'проделанных проектов'} /></Col>
        <Col md={3} sm={12} xs={12}><AboutInfo title={'c 2015'} subtitle={'сотрудников'} /></Col>

      </Row>


      <Row className='mt-4'>


          <div className="about-partners-title">Нам доверяют:</div>

          {arrOfPartners.map((logo, index) => {
            return <Col key={index+1} md={2} sm={12} xs={12} className='mt-2'> <img key={index+1} className='logo-partners' src={logo} alt={logo} /></Col>
          })}

      </Row>

      </>

  )
}

export default AboutUs