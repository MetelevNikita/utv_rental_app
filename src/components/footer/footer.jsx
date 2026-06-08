import './footer.css'

// bootsrap

import { Container, Row, Col } from 'react-bootstrap'

// img

import icon_phone from './../../asset/footer_icons/Phone_icon.svg'
import icon_mail from './../../asset/footer_icons/Main_icon.svg'
import icon_location from './../../asset/footer_icons/Location_icon.svg'


//

import { useEffect, useState } from 'react'

// components

import MyButton from '../../UI/myButton'
import MyCheckBox from '../../UI/myCheckBox'


//


const Footer = ({ modalSubmitAnimation })  => {


  const [check, setCheck] = useState(false)
  useEffect(() => {
    if(check) {
      setMessage({...message, agree: true})
    } else {
      setMessage({...message, agree: false})
    }
  }, [check])


  const [message, setMessage] = useState({
    name: '',
    phone: '',
    email: '',
    text: '',
    agree: false,
  })


  const {modalSubmit, apiSubmit} = modalSubmitAnimation




  const createMessage = async () => {


    if(message.name === ''  && message.phone === '' && message.email === '' && message.text === '') {
      alert('заполните все поля')
      return
    }

    if (!check) {
      alert('Вы не согласились с политикой конфиденциальности')
      return
    }


    console.log(message)

    const responce = await fetch('/api/v1/message', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(message)
    })

    if (!responce.ok) {
      alert(`Ошибка при отправке сообщения, попробуйте позже ${responce.status}`)
      return
    } 

    const data = await responce.json()
    return data

    // apiSubmit.start({
    //   from: {opacity: 0, transform:'scale(0)'},
    //   to: {opacity: 1, transform:'scale(1)'}
    // })

    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth'

    // })
  }





  return(

    <Container>
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
                  <input className='footer-input' type="text" placeholder='Имя' value={message.name} onChange={(e) => {setMessage({...message, name: e.target.value})}}/>
                  <input className='footer-input' type="text" placeholder='Телефон' value={message.phone} onChange={(e) => {setMessage({...message, phone: e.target.value})}}/>
                </div>
            </Col>

            <Col md={6} sm={6} xs={12}>

                <div className="input-box-right">
                    <input className='footer-input' type="text" placeholder='E-mail' value={message.email} onChange={(e) => {setMessage({...message, email: e.target.value})}}/>
                    <input className='footer-input' type="text" placeholder='Сообщение' value={message.text} onChange={(e) => {setMessage({...message, text: e.target.value})}}/>
                </div>

            </Col>
        </Row>


        <Row className='mb-4'>
        <Col md={6} sm={6} xs={12} className='mt-4'>
          <MyCheckBox title={'Я согласен с политикой конфиденциальности'} checked={check} onChange={() => {setCheck(prev => !prev)}}></MyCheckBox>
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
                      <div className="contact-title">+7 (989) 951-90-63</div>
                  </div>

                  <div className="contact-box">
                      <img className='contact-img' src={icon_mail} alt="icon-mail" />
                      <div className="contact-title">utv@ufanet.ru</div>
                  </div>

                  <div className="contact-box">
                      <img className='contact-img' src={icon_location} alt="icon-location" />
                      <div className="contact-title">г. Уфа, проспект Октября, д. 4/2 Е</div>
                  </div>

                </Col>

        </Row>

      </Col>




    </Row>
    </Container>









  )
}

export default Footer