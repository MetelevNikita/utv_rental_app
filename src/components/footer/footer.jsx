import './footer.css'

// bootsrap

import { Container, Row, Col } from 'react-bootstrap'

// img

import icon_phone from './../../asset/footer_icons/Phone_icon.svg'
import icon_mail from './../../asset/footer_icons/Main_icon.svg'
import icon_location from './../../asset/footer_icons/Location_icon.svg'


//

import { useState } from 'react'

// components

import MyButton from '../../UI/myButton'
import MyCheckBox from '../../UI/myCheckBox'


//


const Footer = ({ modalSubmitAnimation })  => {



  const {modalSubmit, apiSubmit} = modalSubmitAnimation
  const [activeChk, setActiveChk] = useState(false)

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  const createMessage = () => {

    if(name === ''  && phone === '' && email === '' && text === '') {
      alert('заполните все поля')
      return
    }


    if(activeChk === false) {
      alert('согласитесь с условиями')
      return
    }

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

      apiSubmit.start({
        from: {opacity: 0, transform:'scale(0)'},
        to: {opacity: 1, transform:'scale(1)'}
      })

      window.scrollTo({
        top: 0,
        behavior: 'smooth'

      })
  }





  return(

    <Row>

        <Row>
              <Col md={12} sm={12} xs={12} className='col-xl-8 col-md-12'>

                <div className="footer-title">Напишите нам</div>
                <div className="footer-subtitle">Готовы создать уникальный проект? Давайте сделаем его вместе!</div>

              </Col>
        </Row>

      <Col className='d-flex flex-column'>

        <Row>
            <Col md={6} sm={6} xs={12}>
                <div className="input-box-left">
                  <input className='footer-input' type="text" placeholder='Имя' value={name} onChange={(e) => {setName(e.target.value)}}/>
                  <input className='footer-input' type="text" placeholder='Телефон' value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
                </div>
            </Col>

            <Col md={6} sm={6} xs={12}>

                <div className="input-box-right">
                    <input className='footer-input' type="text" placeholder='E-mail' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                    <input className='footer-input' type="text" placeholder='Сообщение' value={text} onChange={(e) => {setText(e.target.value)}}/>
                </div>

            </Col>
        </Row>


        <Row className='mb-4'>
        <Col md={6} sm={6} xs={12} className='mt-4'>
          <MyCheckBox title={'Я согласен с политикой конфиденциальности'} checked={activeChk} onChange={() => {setActiveChk(prev => !prev)}}></MyCheckBox>
        </Col>


        <Col md={6} sm={6} xs={12} className='mt-4'>
          <MyButton className={'myBtn'} onClick={() => {createMessage()}}>Отправить заявку</MyButton>
        </Col>
        </Row>

      </Col>


      <Col>

        <Row className='d-flex justify-content-center mt-xs-4'>

                <Col md={6} sm={12} xs={12} >
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

      </Col>




    </Row>









  )
}

export default Footer