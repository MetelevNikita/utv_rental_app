
import './../css/modal_create.css'

//

import { Col, Row } from 'react-bootstrap'

// components

import MyButton from '../../UI/myButton'
import MyInput from '../../UI/myInput'
import MyTextArea from '../../UI/myTextArea'
import MyCheckBox from '../../UI/myCheckBox'

//


import { useState } from 'react'

const ModalCreate = ({modalAnimation, modalSubmitAnimation}) => {


  const {modalOpen, api} = modalAnimation
  const {modalSubmit, apiSubmit} = modalSubmitAnimation

  const [modalCreateChk, setModalCreateChk] = useState(false)


  const [name, setName] = useState('')
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()
  const [text, setText] = useState('')



  const messageTG = ` ЗАЯВКА С САЙТА \n \n Имя ${name} \n Телефон ${phone} \n Email ${email} \n Сообщение ${text}`


  const sendToTelegram = () => {

    const TOKEN_API = '6300640727:AAEfkGCzf4alOlm7vRDiFkgvYixyUeggxz0'
    const CHAT_ID = '-4033081603'
    const URL = `https://api.telegram.org/bot${TOKEN_API}/sendMessage`


    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({chat_id: CHAT_ID, text: messageTG})

    }).then(responce => responce.json())
      .then(data => console.log(data))
  }





  const modalCreateMessage = () => {

    if (name === '' && email === '' && phone === '' && text === '' ) {
      alert('заполните все поля')
      return
    }

    if (modalCreateChk === false) {
      alert('примите условия соглашения')
      return
    }

       const message = {
        name: name,
        phone: phone,
        email: email,
        text: text
      }



      sendToTelegram()


      setName('')
      setEmail('')
      setPhone('')
      setText('')
      setModalCreateChk(false)

      api.start({
        from: {opacity: 1, transform: 'scale(1)'},
        to: {opacity: 0, transform: 'scale(0)'}
      })


      apiSubmit.start({
        from: {opacity: 0, transform: 'scale(0)'},
        to: {opacity: 1, transform: 'scale(1)'}
      })

  }



  return(
    <Row>

      <Col md={4} className='d-flex flex-column justify-content-center' style={{height: "max-content", background: "#0F0F0F", position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "1", paddingLeft: "50px", paddingRight: "50px", borderRadius: "10px"}}>

        <Row className='mt-5'>
            <Col style={{fontSize: 22 + 'px', textTransform: 'uppercase'}} md={10} className='d-flex justify-content-md-start md-3'>готовы создать проект вместе с нами?</Col>
            <Col md={2} className='d-flex justify-content-md-end align-items-md-start md-5'><button className="modal-create-close" onClick={() => {api.start({
              from: {
                opacity: 1,
                transform: 'scale(1)',
              },
              to: {
                opacity: 0,
                transform: 'scale(0)',
              },

            })}}>&#10006;</button></Col>
        </Row>


        <Row className='mt-2 mb-2'>
          <Col style={{fontSize: 12 + 'px', color: 'grey'}}>Оставьте информацию и наш специалист перезвонит вам.</Col>
        </Row>

          <Row className='mt-2'>
            <MyInput style={{marginBottom: 10 + 'px'}} type={'text'} placeholder='name' value={name} onChange={(e) => {setName(e.target.value)}}></MyInput>
            <MyInput style={{marginBottom: 10 + 'px'}} type={'phone'} placeholder='phone' value={phone} onChange={(e) => {setPhone(e.target.value)}}></MyInput>
            <MyInput style={{marginBottom: 10 + 'px'}} type={'email'} placeholder='email' value={email} onChange={(e) => {setEmail(e.target.value)}}></MyInput>
            <MyTextArea style={{marginBottom: 10 + 'px'}} value={text} onChange={(e) => {setText(e.target.value)}}></MyTextArea>
          </Row>


          <Row className='mt-1 mb-5'>
            <Col md={6} sm={6} xs={12} className='d-flex justify-content-md-start mb-3'><MyCheckBox title={'Я согласен с политикой конфиденциальности'} onChange={() => {setModalCreateChk(prev => !prev)}} checked={modalCreateChk}></MyCheckBox></Col>
            <Col md={6} sm={6} xs={12} className='d-flex justify-content-md-end mb-3'><MyButton className={'myBtn'} onClick={() => {modalCreateMessage()}}>Отправить</MyButton></Col>
          </Row>


      </Col>
    </Row>


  )
}

export default ModalCreate