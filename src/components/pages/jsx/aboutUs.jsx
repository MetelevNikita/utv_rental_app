import './../css/aboutUs.css'

import { Col, Row } from "react-bootstrap"

// components

import AboutInfo from "../../../UI/aboutInfo"

// img

import logo1 from './../../../asset/logo_partners/logo 1.svg'
import logo2 from './../../../asset/logo_partners/logo 2.svg'
import logo3 from './../../../asset/logo_partners/logo 3.svg'
import logo5 from './../../../asset/logo_partners/logo 5.svg'
import logo6 from './../../../asset/logo_partners/logo 6.svg'




const AboutUs = () => {

  const arrOfPartners = [logo1, logo2, logo3, logo5, logo6]

  return(
      <>
      <Row>
        <Col className="col-12">
          <div className="about-title-box">
              <div className="about-title">НАДЕЖНАЯ КОМАНДА</div>
              <div className="about-title">РАБОТАЕМ НА КАЧЕСТВО</div>
          </div>

          <div className="about-subtitile">Наша компания занимается прямыми трансляциями в интернет для коммерческих организаций. <br></br> <br></br>

            Мы предоставляем возможность проведения прямых трансляций для корпоративных клиентов, которые хотят увеличить свою аудиторию и расширить свой бизнес.</div>
        </Col>
      </Row>


      <Row md={12}>

        <Col className='d-flex justify-content-md-start justify-content-center' md={3} sm={12} xs={12}><AboutInfo title={'c 2015'} subtitle={'года на рынке'} /></Col>
        <Col className='d-flex justify-content-md-start justify-content-center' md={3} sm={12} xs={12}><AboutInfo title={'1 000'} subtitle={'проделанных проектов'} /></Col>
        <Col className='d-flex justify-content-md-start justify-content-center' md={3} sm={12} xs={12}><AboutInfo title={'c 2015'} subtitle={'сотрудников'} /></Col>

      </Row>


      <Row md={12} className='mt-4'>
              <Col className='d-flex justify-content-md-start justify-content-center'><div>Нам доверяют:</div></Col>
      </Row>


      <Row md={12} className='mt-4'>

          {arrOfPartners.map((logo, index) => {
            return <Col key={index+1} md={2} sm={12} xs={12} className='d-flex justify-content-center mt-4'> <div className='logo-partners-box'><img key={index+1} className='logo-partners' src={logo} alt={logo} /></div></Col>
          })}

      </Row>

      </>

  )
}

export default AboutUs