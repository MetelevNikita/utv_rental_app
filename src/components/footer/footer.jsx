import './footer.css'

// bootsrap

import { Container, Row, Col } from 'react-bootstrap'

// img

import icon_phone from './../../asset/footer_icons/Phone_icon.svg'
import icon_mail from './../../asset/footer_icons/Main_icon.svg'
import icon_location from './../../asset/footer_icons/Location_icon.svg'


const Footer = ()  => {


  return(

    <Container>

      <Row>
        <Col className='col-xl-8 col-md-12'>
        <div className="footer-title">Напишите нам</div>
        <div className="footer-subtitle">Готовы создать уникальный проект? Давайте сделаем его вместе!</div>


          <Row>
            <Col className='d-flex'>
                  <div className="input-box-left">
                    <input className='footer-input' type="text" placeholder='Имя'/>
                    <input className='footer-input' type="text" placeholder='Телефон'/>
                  </div>
              </Col>

              <Col className='d-flex'>

                  <div className="input-box-right">
                      <input className='footer-input' type="text" placeholder='E-mail'/>
                      <input className='footer-input' type="text" placeholder='Сообщение'/>
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