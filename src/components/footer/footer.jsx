import './footer.css'

// bootsrap

import { Container, Row, Col } from 'react-bootstrap'

// img

import icon_phone from './../../asset/footer_icons/Phone_icon.svg'
import icon_mail from './../../asset/footer_icons/Main_icon.svg'
import icon_location from './../../asset/footer_icons/Location_icon.svg'


//

import { useState } from 'react'


const Footer = ()  => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  const createMessage = () => {

    const message = {
      name: name,
      phone: phone,
      email: email,
      text: text
    }


    setName('')
    setPhone('')
    setEmail('')
    setText('')




    return message
  }




  return(

    <Container className='footer-container' id='contacts'>

      <Row>
        <Col className='col-xl-8 col-md-12'>
        <div className="footer-title">Напишите нам</div>
        <div className="footer-subtitle">Готовы создать уникальный проект? Давайте сделаем его вместе!</div>


          <Row>
            <Col className='d-flex'>
                  <div className="input-box-left">
                    <input className='footer-input' type="text" placeholder='Имя' value={name} onChange={(e) => {setName(e.target.value)}}/>
                    <input className='footer-input' type="text" placeholder='Телефон' value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
                  </div>
              </Col>

              <Col className='d-flex'>

                  <div className="input-box-right">
                      <input className='footer-input' type="text" placeholder='E-mail' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                      <input className='footer-input' type="text" placeholder='Сообщение' value={text} onChange={(e) => {setText(e.target.value)}}/>
                  </div>

              </Col>
          </Row>



        <div className="input-bottom-box">
          <input className='input-bottom-chk' type="checkbox" name="" id="" />
          <span className='input-bottom-chk-title'>Я согласен с политикой конфиденциальности</span>

          <button className='input-bottom-btn'>Отправить заявку</button>
        </div>




        </Col>


        <Col className='col-xl-4 col-md-4'>

        <div className="footer-contacts">КОНТАКТЫ</div>


        <div className="contact-box">
            <img className='contact-img' src={icon_phone} alt="icon-phone" />
            <div className="contact-title">+7 (000) 000-00-00</div>
        </div>

        <div className="contact-box">
            <img className='contact-img' src={icon_mail} alt="icon-mail" />
            <div className="contact-title">vr-project.ru</div>
        </div>

        <div className="contact-box">
            <img className='contact-img' src={icon_location} alt="icon-location" />
            <div className="contact-title">г.Уфа, улица Бакалинская 64/4</div>
        </div>

        </Col>
      </Row>



    </Container>

  )
}

export default Footer